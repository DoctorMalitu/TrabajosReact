import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Producto from './componentes/Producto';
import Carrito from './componentes/Carrito';
import './App.css';

function App() {



  const [ productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa React', precio:50 },
    { id: 2, nombre: 'Camisa PHP', precio:20 },
    { id: 3, nombre: 'Camisa Node', precio:30 },
    { id: 4, nombre: 'Camisa Angular', precio:10 },
  ]);

 //State para un carrito de compras

  const [ carrito, agregarProducto ]= useState ([]);
  const fecha = new Date().getFullYear();
  return (
    <Fragment>

      <Header
        titulo='Aprendiendo'
      /> 
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
            key ={producto.id}
            producto = {producto}
            carrito ={carrito}
            productos={productos}
            agregarProducto={agregarProducto}
        />
      ))}
      <Carrito 
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer 
        fecha={fecha}
      />

     </Fragment>
  );
}

export default App;
