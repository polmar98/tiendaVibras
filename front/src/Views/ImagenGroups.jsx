import React from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getGroupById, actualizarImagen } from "../Redux/Groups/GroupsActions"; 
import { useParams, useNavigate } from "react-router-dom";
import Subtitle from "../Components/Subtitle";
import style from "../styles/ImagenArticles.module.css";
import noimagen from "../img/noimagen.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ImagenGroups() {
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 
    const urlPicture = "https://api.cloudinary.com/v1_1/diibdp1yu/image/upload";

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


   //ejecuta cloudinary desde el front y manda a guardar la url en el back 
   
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
          <Subtitle props={group.gru_nombre}/>   
          <input type="file" name="image" accept='image/*' onChange={handleChangeImage}/>
          {urlImage && (
             <div className={style.cajaImagen}>
                <img src={urlImage} alt="" className={style.imagen} id="imagenPrevia"/>
             </div>
          )}
          <button onClick={handleActualizarBD}>Actualizar Imagen</button>
          <ToastContainer />
       </div>
   ) 
       

    // En esta opcion se manda al back a que guarde la imagen en cloudinary y luego actualice la BD
    /*
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
    */

};

export default ImagenGroups;