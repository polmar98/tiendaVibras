import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticleById, actualizarImagen } from "../Redux/Articles/ArticlesActions";
import { useParams, useNavigate } from "react-router-dom";
import Subtitle from "../Components/Subtitle";
import style from "../styles/ImagenArticles.module.css";
import noimagen from "../img/noimagen.png";
import PiePagina from "../Components/PiePagina";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ImagenArticles() {
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 
    const urlPicture = "https://api.cloudinary.com/v1_1/diibdp1yu/image/upload";
    const dispatch = useDispatch();
    const params = useParams();
    const art = useSelector((state) => state.Articles.articulo);
    const [urlImage, setUrlImage] = useState(art.art_imagen);
    
    let ximage = noimagen;
    if(art.art_imagen) ximage = art.art_imagen;
   
    const rutaImagen = `${rutaPpal}/articles/image/${params.id}`;

    useEffect(() => {
       dispatch(getArticleById(rutaPpal, params.id));
    },[]);

   

    const handleChangeImage = async(e) => {
      const file = e.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "Carpeta_React");
      try {
         const result = await axios.post(urlPicture, data);
         const img = result.data.secure_url;
         setUrlImage(img);
       } catch (error) {
        console.log("Error al cargar imagen");
      }
    };

    const handleActualizarBD = () => {
      if(urlImage.length>0) {
         const datos = {
            id: params.id,
            imagen: urlImage
         };
         dispatch(actualizarImagen(rutaPpal, datos));
         mensaje();
      }
   };

   const mensaje = () => {
      toast('🦄 Imagen de Grupo Actualizada!', {
         position: "top-right",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         });
   };

    return (
      <div>
          <Subtitle props={art.art_detalles}/>   
          <input type="file" name="image" accept='image/*' onChange={handleChangeImage}/>
          {urlImage && (
             <div className={style.cajaImagen}>
                <img src={urlImage} alt="" className={style.imagen} id="imagenPrevia"/>
             </div>
          )}
          <button onClick={handleActualizarBD}>Actualizar Imagen</button>
          <ToastContainer />
       </div>
   ); 
 
    
};

export default ImagenArticles;