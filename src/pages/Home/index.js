import "./style.css";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import axios from "axios";
import moment from "moment/moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, seDescription] = useState("");
  const [date, setDate] = useState("");
  const [taskDB, setTasksDB] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);
  const notify = () =>
    toast.success("Task Criada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const updateTask = async (id,status) => {
    await axios.put('https://api-lake-pi.vercel.app/todo/'+id, {
      status: !status,
    });
    getTasks();
  }

  const saveTask = async () => {
    const tasks = await axios.post("https://api-lake-pi.vercel.app/todo", {
      title: title,
      description: description,
      date: date,
    });
    getTasks();
    notify();
   
  };

  const getTasks = async () => {
    const tasks = await axios.get("https://api-lake-pi.vercel.app/todo");

    setTasksDB(tasks.data);
  };

  return (
    <div className="container-home">
        <ToastContainer />
      <div className="subcontainer-home">
        <div className="container-left">
          <h1> Task List</h1>
          <p>Gerenciador de Tarefas, para organizar seu dia a dia</p>

          <div className="container-form">
            <input
              placeholder="Titulo"
              onChange={(txt) => setTitle(txt.target.value)}
            />
            <textarea
              placeholder="Descricao"
              onChange={(txt) => seDescription(txt.target.value)}
            />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={date}
              onChange={(txt) => setDate(txt)}
            />
            <button onClick={saveTask} className="btn-save">
              Salvar
            </button>
          </div>
        </div>
        <ul className="container-right">
          {taskDB.map((item) => {

            const formattedDate = moment(item.date).format('DD/MM/yyyy')
            return (
              <li key={item._id}>
                <div>
                  <Link to={'/details/' + item._id}>
                    <h2 style={ item.status ? {} : {textDecoration: 'line-through'}}>{item.title}</h2>
                    <h3>{formattedDate}</h3>
                    <h3>{item.description}</h3>
                  </Link>
                </div>
                <button onClick={() => updateTask(item._id,item.status)}>
                  <FaCheck size={22} color="#1a1a1a" />
                </button>
            
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
