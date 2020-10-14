import React,{Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';


function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () =>{
        const url=`https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=5811790bb8c64ccd92f13f4e096c561c`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])
  return (
    <Fragment>
        <Header
          titulo="Buscador de noticias"
        />
        <div  className="container white">
            <Formulario
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias
              noticias={noticias}
            />
        </div>
    </Fragment>
    
      
  );
}

export default App;
