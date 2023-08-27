import React from "react";
import style from "../styles/Searchbar.module.css";
import { useState } from "react";

const Searchbar = () => {
    const [filtro, setFiltro] = useState("");
    const handleSearch = () => {
       console.log(filtro)
    };

    const handleChange = (e) => {
       const value = e.target.value;
       setFiltro(value);
    };

    return (
        <div className={style.search}>
            <input type="text"
                   name="search" 
                   value={filtro} 
                   onChange={(e)=>handleChange(e)}
                   className={style.input}/>
            <button className={style.boton} onClick={handleSearch()}>Buscar</button>
        </div>
    )

};

export default Searchbar;