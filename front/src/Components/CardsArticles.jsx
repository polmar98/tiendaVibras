import CardArticle from "./CardArticle";
import style from "../styles/CardsArticles.module.css";
import { useSelector } from "react-redux";

const CardsArticles = ({lisArt}) => {
   const usuario = useSelector((state) => state.Users.usuario);
   if(typeof lisArt == "undefined") lisArt = [];
   return (
      <div>
         <div className={style.Container}>
          {lisArt.map(prop => 
              <CardArticle
                 key={prop.id}
                 id={prop.id}
                 name={prop.art_detalles}
                 referen={prop.art_referencia}
                 pPublico={prop.precioPublico}
                 pMayorista={prop.precioMayorista}
                 marca={prop.marc_nombre}
                 image={prop.art_imagen}
                 precosto={prop.art_costopromedio}
                 idusua={usuario.mayorista}
                 idAdmin={usuario.admin}
              />
          )}
        
         </div>
      </div>
   
   )
};

export default CardsArticles;