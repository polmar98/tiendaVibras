import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {getGroups} from '../Redux/Groups/GroupsActions';
import { useEffect, useState } from "react";
import CardsGroup from "../Components/CardsGroup";


function Home() {
   const rutaPpal = useSelector((state) => state.Rutas.rutas); 
   const groupLista = useSelector((state) => state.Groups.groupList);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getGroups(rutaPpal));
   },[]);

   return (
       <div>
           <CardsGroup lisGrupo={groupLista}/>
       </div>
   )
};

export default Home;