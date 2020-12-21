import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Context } from '../../context/DataContext'

import'./styles.scss'

function Bar() {
    const { active, request } = useContext(Context);
    const { handleSubmit, register } = useForm();
    async function onSubmit(data){
        request(data.city)
    }
    return (
        <div className={`bar ${active ? 'active-bar':''}`}>
            <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
                <h1>DRIZZLE</h1>
                <p>Consulte sobre os dados climaticos de sua cidade no <b>DRIZZLE</b></p>    
                <input ref={register({required:true})} name="city" type="text" placeholder="nome da cidade" />
                <button type="submit">pesquisar</button>
            </form>
        </div>
        )
}

export default Bar;