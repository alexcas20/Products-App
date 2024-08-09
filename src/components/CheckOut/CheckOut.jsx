import { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const CheckOut = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      prdouctos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    // Referencia a la colecion
    const pedidosRef = collection(db, "pedidos");
    // Agregar data a la db
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      // vaciar carrito
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container-form">
        <h1 className="container-form-title">Muchas gracias por tu compra</h1>
        <p>
          Tu numero de pedido es: <b>{pedidoId}</b>
        </p>
      </div>
    );
  }

  return (
    <section className="container-form">
      <h1 className="container-form-title">Finalizar Compra</h1>
      <form className="form" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresa tu telefono"
          {...register("telefono")}
        />
        <button type="submit">Comprar</button>
      </form>
    </section>
  );
};
