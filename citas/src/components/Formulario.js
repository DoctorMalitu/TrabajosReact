import React, {Fragment, useState} from 'react'
import {v4 as uuid} from 'uuid';

const Formulario = ({ crearCitas }) => {

    // Crear state citas
    const [ cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });


    // State error 

    const [ error , actualizarError] = useState(false);

    // Funcion que se ejecuta cada que el usuario escribe en un input

    const actualizarState = e => {
            actualizarCita({
                ...cita,
                [e.target.name] : e.target.value
            })
    } 

    // Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // cuando el usuario presiona agregar cita

    const submitCita = e => {
       e.preventDefault();

      // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false);


      //Asignar un ID

        cita.id = uuid();
       
      // Crear la cita
        crearCitas(cita);


      //Reiniciar el form

        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        });


    }
     
   
    return ( 

        <Fragment>
            <h1>Crear cita</h1>
            {  error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                 <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                   
                />
                <label>Hora</label>
                 <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
                
                
                
            </form>
        </Fragment>
       
     );
}
 
export default Formulario;
