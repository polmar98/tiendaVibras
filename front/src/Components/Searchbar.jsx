import React from "react";
import style from "../styles/Searchbar.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchArticles } from "../Redux/Articles/ArticlesActions";

const Searchbar = () => {
    const [filtro, setFiltro] = useState("");
    const dispatch = useDispatch();
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 

    const handleSearch = (e) => {
        //localStorage.clear("filtroBusqueda");
        //localStorage.setItem("filtroBusqueda", filtro); 
        //const urlActual = window.location;
        e.preventDefault();
        dispatch(searchArticles(rutaPpal, filtro));
       
    };

    const handleChange = (e) => {
       e.preventDefault(); 
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
            <button className={style.boton} onClick={(e)=>handleSearch(e)}>Buscar</button>
        </div>
    )

};

export default Searchbar;