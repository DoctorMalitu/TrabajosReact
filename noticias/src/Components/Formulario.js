import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Formulario = ({guardarCategoria}) => {

    //submit al form, pasar categoria a app.js

    const buscarNoticia = e =>{
        e.preventDefault();

        guardarCategoria(categoria);
    }
    //const OPCIONES
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'healt', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},

    ]

    //Custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    return ( 

        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticia}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por categoría</h2>
                        <SelectNoticias/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}
Formulario.propTypes={
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;