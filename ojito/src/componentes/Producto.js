import React from 'react';

function Producto({producto, carrito, agregarProducto, productos}) {

    const{nombre, precio, id} = producto;

    //Agregar producto al carrito 

    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

  //Eliminar producto del carro

    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id);
         // Colocar los productos en el state

         agregarProducto(productos);
    }
    return (
        <div>   
            <h2>Nombre: {nombre}</h2>
            <h1>Precio: ${precio}</h1>
            {productos 
            ?
             (
                <button  
                type="button"
                onClick={ () => seleccionarProducto(id) }
                >Comprar
                </button>
             )
            :(
                <button  
                type="button"
                onClick={ () => eliminarProducto(id) }
                >eliminar
                </button>
            )}
        </div>
    );
}

export default Producto;
