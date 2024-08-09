import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import { Link } from "react-router-dom";

export const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <section className="container-carrito">
      <h1>Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.titulo}</h3>
          <p>Precio unit: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          <p>{prod.cantidad}</p>
          <hr />
        </div>
      ))}
      {carrito?.length > 0  ? (
        <>
         <h2>Precio Total: ${precioTotal()} </h2>
         <button onClick={handleVaciar}>Vaciar</button>
         <Link to={"/checkout"}>Finalizar Compra</Link>
        </>
       
      )
    : <h2>El carrito esta vacio.</h2>}

      
    </section>
  );
};
