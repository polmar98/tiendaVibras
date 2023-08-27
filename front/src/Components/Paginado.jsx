import React from "react";
import style from "../styles/Paginado.module.css";

export default function Paginado({recordsPerPage, lenRecords, paginado, actualPage}) {
    const pageNumbers = [];
    for(let i=0; i<Math.ceil(lenRecords/recordsPerPage); i++) {
        pageNumbers.push(i+1);
    };

    return (
        <div>
            <ul className={style.paginado}>
                {pageNumbers && 
                   pageNumbers.map(number => (
                      <li className={number===actualPage ? style.itemsPaginadoSelected : style.itemsPaginado}
                          key={number}>
                         <a onClick={()=>paginado(number)}>{number}</a>
                      </li>
                   ))
                }
            </ul>
        </div>
    )

};