import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {getArticles, cambiarPagina} from "../Redux/Articles/ArticlesActions"
import {getGroupById} from "../Redux/Groups/GroupsActions";
import CardsArticles from "../Components/CardsArticles";
import Subtitle from "../Components/Subtitle";
import Paginado from "../Components/Paginado";
import style from "../styles/Paginado.module.css";
import PiePagina from "../Components/PiePagina";

function Articles() {
    const params = useParams();
    const idGroup = params.id;
    const dispatch = useDispatch();
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 
    const listArticles = useSelector((state) => state.Articles.articlesList);
    const linea = useSelector((state) => state.Groups.group)
    const pagActual = useSelector((state) => state.Articles.paginaActual);

    //declaramos las variables para el paginado
    const [currentPage, setCurrentPage] = useState(1);   //inicializamos la primera pagina en 1
    const recordsPerPage = 12; //declaramos 12 registros x pagina
    const indexOfLastRecord = currentPage * recordsPerPage;  //declaramos indice del ultimo registro
    const indexOfFirtsRecord = indexOfLastRecord - recordsPerPage;  //declaramos indice del primer registros
    const currentRecords = listArticles.slice(indexOfFirtsRecord, indexOfLastRecord); //decalramos registros de la pagina actual

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
        dispatch(cambiarPagina(pageNumber));
    };

    useEffect(() => {
       dispatch(getGroupById(rutaPpal, idGroup)); 
       dispatch(getArticles(rutaPpal, idGroup));
     },[]);
  
     return (
         <div>
            <Subtitle props={linea.gru_nombre}/>
            <CardsArticles lisArt={currentRecords}/>
            <div className={style.paginado}>
              <Paginado
                  recordsPerPage={recordsPerPage}
                  lenRecords={listArticles.length}
                  paginado={paginado}
                  actualPage={currentPage}
              />
           </div> 
           <PiePagina/>           
         </div>
     )
};

export default Articles;