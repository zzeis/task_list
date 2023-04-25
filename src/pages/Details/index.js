import "./style.css";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getTask();
  }, []);

  const notify = () =>
    toast.success("Atualizado com Sucesso !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const getTask = async () => {
    const task = await axios.get("https://api-lake-pi.vercel.app/todo/" + id);

    setTitle(task.data.title);
    setDescription(task.data.description);
    const formattedDate = new Date(task.data.date);

    setDate(formattedDate);
  };

  const removeTask = async () => {
    await axios.delete("https://api-lake-pi.vercel.app/todo/" + id);

    alert("user deleted");
    history("/");
  };

  const updateTask = async () => {
    await axios.put("https://api-lake-pi.vercel.app/todo/" + id, {
      title: title,
      description: description,
      date: date,
    });

    notify();
  };
  return (
    <div className="container-details">
      <ToastContainer />
      <div className="subcontainer-details">
        <div className="header">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>

        <input
          value={title}
          placeholder="Titulo"
          onChange={(txt) => setTitle(txt.target.value)}
        />
        <textarea
          value={description}
          placeholder="Descricao"
          onChange={(txt) => setDescription(txt.target.value)}
        />
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(txt) => setDate(txt)}
        />

        <div className="buttons">
          <button onClick={updateTask}>Salvar</button>
          <button onClick={removeTask}>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
