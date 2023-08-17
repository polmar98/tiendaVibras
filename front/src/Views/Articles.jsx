import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {getArticles} from "../Redux/Articles/ArticlesActions"
import {getGroupById} from "../Redux/Groups/GroupsActions";
import CardsArticles from "../Components/CardsArticles";
import Subtitle from "../Components/Subtitle";

function Articles() {
    const params = useParams();
    const idGroup = params.id;
    const dispatch = useDispatch();
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 
    const listArticles = useSelector((state) => state.Articles.articlesList);
    const linea = useSelector((state) => state.Groups.group)

    useEffect(() => {
       dispatch(getGroupById(rutaPpal, idGroup)); 
       dispatch(getArticles(rutaPpal, idGroup));
     },[]);
  
     return (
         <div>
            <Subtitle props={linea.gru_nombre}/>
            <CardsArticles lisArt={listArticles}/>
         </div>
     )
};

export default Articles;