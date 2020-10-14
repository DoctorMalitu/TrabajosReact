import React from 'react';
import { obtenerLetraMayus} from '../helper'


import styled from '@emotion/styled';


const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#fff;
    margin-top:1rem;
`;

const Resumen = ({datos}) => {
    
    const{marca,year,plan}=datos;

    if(marca === '' || year === '' || plan === '')return null;


    return (  

        <ContenedorResumen>
             <h2>Resumen de Cotizacion</h2>
        <ul>
            <li>Marca: {obtenerLetraMayus(marca)} </li>
            <li>Año: {year}</li>
            <li>Plan:{obtenerLetraMayus(plan)}</li>
        </ul>
        </ContenedorResumen>
       
    );
}
 
export default Resumen;