import { useEffect, useState } from "react";
import { CardContext } from "./CardContext";

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const Provider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, itemAgregado]);
    
    
    }
  };

  // aumentar widget numero carrito
  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  //precio total compra
  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };
  
  //vaciar carrito
  const vaciarCarrito = () => {
    return setCarrito([]);
  }

  useEffect(() => {
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito]);

  return (
    <CardContext.Provider
      value={{ carrito, setCarrito, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarrito}}
    >
      {children}
    </CardContext.Provider>
  );
};
