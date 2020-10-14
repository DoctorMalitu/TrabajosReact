import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citass'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //Areglo de citas
  
const [citass , guardarCitass] = useState(citasIniciales);

// Use Effect para realiazar ciertas operaciones cuando el state cambia

useEffect( () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citass'));
 if(citasIniciales){
    localStorage.setItem('citass', JSON.stringify(citass));
 } else {
   localStorage.setItem('citass', JSON.stringify([]));
 }
}, [citass] );

//Funcion que tome las citas actuales y agregue la nueva
const crearCitas = cita => {
  guardarCitass([ ...citass,  cita]);
}
 
//Funcion que elimina cita

const eliminarCita = id => {

  const nuevasCitas = citass.filter(cita => cita.id !== id);
  guardarCitass(nuevasCitas);

}

//Mensaje condicional

const titulo= citass.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Agendar cita mascotas</h1>

      <div className="container">
          <div className="row">
            <div className="one-half column">
                <Formulario
                  crearCitas={crearCitas}
                />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
               {citass.map(cita => (
                 <Cita
                 key={cita.id}
                 cita={cita}
                 eliminarCita={eliminarCita}
                 />
               ))}
            </div>
          </div>

      </div>
    </Fragment>
    
  );
}

export default App;
