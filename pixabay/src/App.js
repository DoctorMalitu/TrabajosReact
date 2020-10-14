import React, { useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import ListadoImagenes from './Components/ListadoImagenes';



function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect (() => {
    const consultarAPI = async () =>{
      if(busqueda === '')return;

      const imagenesPorPagina = 30;
      const key = '17735582-c3b523f82326cba1f45775ddc';
      const url= `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      //calcular el total de paginas

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);


      //mover la pantalla para arriba
      
      const jumbotron =document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'});
    
    }
    consultarAPI();
   
  },[busqueda, paginactual])

  // Definir la pagina anterior

  const paginaAnterior  = () =>{
    const nuevaPaginaActual = paginactual -1;

    if(nuevaPaginaActual === 0)return;

    guardarPaginaActual(nuevaPaginaActual)
  }

  // Definir pagina siguiente
  

  const paginaSiguiente  = () =>{
    const nuevaPaginaActual = paginactual +1;

   if (nuevaPaginaActual > totalpaginas)return;

    guardarPaginaActual(nuevaPaginaActual)
  }

  return (
    <div className=" container">
        <div className="jumbotron">
            <p className="lead text-center">Buscador de Imagenes</p>
        
          <Formulario
            guardarBusqueda={guardarBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <ListadoImagenes
            imagenes={imagenes}
          />
        {(paginactual === 1) ? null :(
            <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          > &laquo; Anterior</button>
        )}
           {(paginactual === totalpaginas) ? null :(
             <button
             type="button"
             className="btn btn-info "
             onClick={paginaSiguiente}
           >Siguiente &raquo;</button>
           )}
        </div>
    </div>
  );
}

export default App;
