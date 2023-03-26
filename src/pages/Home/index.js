import './style.css' 
import { useState } from "react";
import DatePicker from "react-datepicker";

import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home = () =>{
    const [title,setTitle ] = useState('');  
    const [description,seDescription ] = useState('');  
    const [date,setDate ] = useState('');  
    return (
        <div className='container-home'>
            <div className='subcontainer-home'>
                
                <div className='container-left'>
                    <h1> Task List</h1>
                    <p>Gerenciador de Tarefas, para organizar seu dia a dia</p>

                    <div className='container-form'>
                        <input placeholder='Titulo' onChange={(txt)=> setTitle(txt.target.value)}/>
                        <textarea placeholder='Descricao' onChange={(txt)=> seDescription(txt.target.value)}/>
                        <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(txt)=> setDate(txt)} />
                        <button className='btn-save'>Salvar</button>
                    </div>
                </div>
                <ul className='container-right'>
                    <li>
                        <Link to="/details/1">
                        <div>
                            <h2>Titulo</h2>
                            <h3>23/03/2023</h3>
                            <h3>essa e uma descricao da tarefa</h3>
                        </div>
                        <FaCheck size={22} color="#1a1a1a"/>
                        </Link>
                    </li>
                </ul>

            </div>
            
        </div>
    )
}

export default Home