import CardArticle from "./CardArticle";
import style from "../styles/CardsArticles.module.css";

const CardsArticles = ({lisArt}) => {
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
                 image={prop.gru_imagen}
              />
          )}
        
         </div>
      </div>
   
   )
};

export default CardsArticles;