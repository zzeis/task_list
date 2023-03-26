import "./style.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Details = () => {
    const [title,setTitle ] = useState('');  
    const [description,seDescription ] = useState('');  
    const [date,setDate ] = useState('');  

  return (
    <div className="container-details">
      <div className="subcontainer-details">
        <div className="header">
          <Link to="/">
            <FaArrowLeft />

            
          </Link>
        </div>

        <input placeholder='Titulo' onChange={(txt)=> setTitle(txt.target.value)}/>
                        <textarea placeholder='Descricao' onChange={(txt)=> seDescription(txt.target.value)}/>
                        <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(txt)=> setDate(txt)} />

        <div className="buttons">
          <button>Salvar</button>
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
