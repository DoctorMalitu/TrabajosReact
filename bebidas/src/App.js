import React from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListarRecetas from './Components/ListarRecetas';

import CategoriasProvider from './context/CategoriasContext';
import Recetasprovider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';


function App() {
  return (
      <CategoriasProvider>
        <Recetasprovider>
          <ModalProvider>
            <Header/>

            <div className="container mt-5">
              <div className="row">
                <Formulario/>
              </div>
              <ListarRecetas/>
            </div>
          </ModalProvider>
        </Recetasprovider>
      </CategoriasProvider>
  );
}

export default App;
