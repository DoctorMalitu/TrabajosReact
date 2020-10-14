import React,{Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error';



function App() {
  const [busqueda, guardarBusqueda]= useState({
    ciudad:'',
    pais:''
});

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError]= useState(false);

const {ciudad, pais} = busqueda;

useEffect(() => {
  const consultarAPI = async () => {
   if(consultar){

    const appId='2a71b0395964077ce54702bc5a396531';
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    const respuesta= await fetch(url);
    const resultado = await respuesta.json();

    guardarResultado(resultado);
    guardarConsultar(false);

    // Detectar si el resultado de la busqueda dio error
    if(resultado.cod === "404"){
      guardarError(true);
    }else{
      guardarError(false);
    }
   }

  
  }
  consultarAPI();
  //eslint-disable-next-line
}, [consultar]);

  return (
    <Fragment>
      <Header
        titulo='Clima react'
      />

      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                      <Formulario
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                        guardarConsultar={guardarConsultar}
                      />
                  </div>
                  <div className="col m6 s12">
                  {error ? <Error mensaje= "No tenemos resultados" /> : null}
                  <Clima  resultado={resultado}/>
                  </div>
              </div>
          </div>
      </div>
      
    </Fragment>
    
  );
}

export default App;
