import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticleById } from "../Redux/Articles/ArticlesActions";
import { useParams, useNavigate } from "react-router-dom";
import Subtitle from "../Components/Subtitle";
import style from "../styles/ImagenArticles.module.css";
import noimagen from "../img/noimagen.png";

function ImagenArticles() {
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 

    const dispatch = useDispatch();
    const params = useParams();
    const art = useSelector((state) => state.Articles.articulo);
    let ximage = noimagen;
    if(art.art_imagen) ximage = art.art_imagen;
   
    const rutaImagen = `${rutaPpal}/articles/image/${params.id}`;
    console.log(rutaImagen);

    useEffect(() => {
       dispatch(getArticleById(rutaPpal, params.id));
    },[]);

    return (
        <div>
            <Subtitle props={art.art_detalles}/>   
             <div className={style.cajaImagen}>
                <img src={ximage} alt="" className={style.imagen} id="imagenPrevia"/>
             </div>
             <form method="post" action={rutaImagen} enctype="multipart/form-data">
                <input type="file" name="image"/>
                <button type="submit">Cargar Imagen</button>
             </form>
         </div>
    )    
};

export default ImagenArticles;