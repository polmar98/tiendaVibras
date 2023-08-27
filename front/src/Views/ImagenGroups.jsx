import React from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getGroupById } from "../Redux/Groups/GroupsActions"; 
import { useParams, useNavigate } from "react-router-dom";
import Subtitle from "../Components/Subtitle";
import style from "../styles/ImagenArticles.module.css";
import noimagen from "../img/noimagen.png";

function ImagenGroups() {
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 


    const dispatch = useDispatch();
    const params = useParams();
    const group = useSelector((state) => state.Groups.group);
    const [urlImage, setUrlImage] = useState(group.gru_imagen);
    let ximage = noimagen;
    if(group.gru_imagen) ximage = group.gru_imagen;
   
    const rutaImagen = `${rutaPpal}/groups/image/${params.id}`;
 
    useEffect(() => {
       dispatch(getGroupById(rutaPpal, params.id));
    },[]);


   //opcion en investigacion, ejecuta cloudinary desde el front y manda a guardar la url en el back 
   /*
    const handleChangeImage = async(e) => {
       const file = e.target.files[0];
       const obj = document.getElementById('imagenPrevia');
       obj.src = url;
       setUrlImage(url);
    };

    return (
      <div>
          <Subtitle props={group.gru_nombre}/>   
           <div className={style.cajaImagen}>
              <img src={ximage} alt="" className={style.imagen} id="imagenPrevia"/>
           </div>
           <input type="file" name="image" onChange={handleChangeImage}/>
       </div>
   ) 
   */    

    // En esta opcion se manda al back a que guarde la imagen en cloudinary y luego actualice la BD
    return (
        <div>
            <Subtitle props={group.gru_nombre}/>   
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

export default ImagenGroups;