import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {getGroups, cambiarPagina} from '../Redux/Groups/GroupsActions';
import { useEffect, useState } from "react";
import CardsGroup from "../Components/CardsGroup";
import { useAuth0 } from "@auth0/auth0-react";
import { ingresoSistema } from "../Redux/Users/UsersActions";
import Paginado from "../Components/Paginado";
import style from "../styles/Paginado.module.css";


function Home() {
   const rutaPpal = useSelector((state) => state.Rutas.rutas); 
   const groupLista = useSelector((state) => state.Groups.groupList);
   const pagActual = useSelector((state) => state.Groups.paginaActual);
   const usuario = useSelector((state) => state.Users.usuario);
   const {user, isAuthenticated} = useAuth0();
   const dispatch = useDispatch();
   //declaramos las variables para el paginado
   const [currentPage, setCurrentPage] = useState(pagActual);   //inicializamos la primera pagina en 1
   const recordsPerPage = 9; //declaramos 9 registros x pagina
   const indexOfLastRecord = currentPage * recordsPerPage;  //declaramos indice del ultimo registro
   const indexOfFirtsRecord = indexOfLastRecord - recordsPerPage;  //declaramos indice del primer registros
   const currentRecords = groupLista.slice(indexOfFirtsRecord, indexOfLastRecord); //decalramos registros de la pagina actual
   
   const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
      dispatch(cambiarPagina(pageNumber));
   };

   useEffect(() => {
      dispatch(getGroups(rutaPpal));
      if(isAuthenticated && usuario.id == 3 ) {
         const datos = {usuario: user.name, email: user.email};
         dispatch(ingresoSistema(rutaPpal, datos));
      };
   },[]);

   return (
       <div>
           <CardsGroup lisGrupo={currentRecords} xusuario={usuario}/>
           <div className={style.paginado}>
              <Paginado
                  recordsPerPage={recordsPerPage}
                  lenRecords={groupLista.length}
                  paginado={paginado}
                  actualPage={currentPage}
              />
           </div>

       </div>
   )
};

export default Home;