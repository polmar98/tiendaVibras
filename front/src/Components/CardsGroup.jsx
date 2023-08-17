import CardGrupo from "./CardGrupo";
import style from "../styles/CardsGroup.module.css";
const CardsGroup = ({lisGrupo}) => {
   if(typeof lisGrupo == "undefined") lisGrupo = [];
   return (
      <div>
         <div className={style.Container}>
          {lisGrupo.map(prop => 
              <CardGrupo
                 key={prop.id}
                 id={prop.id}
                 name={prop.gru_nombre}
                 image={prop.gru_imagen}
              />
          )}
        
         </div>
      </div>
   
   )
};

export default CardsGroup;