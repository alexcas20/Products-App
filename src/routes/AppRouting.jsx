import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "../components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetail/ItemDetailContainer";
import { Contacto } from "../components/Contacto/Contacto";
import { Carrito } from "../components/Carrito/Carrito";
import { CheckOut } from "../components/CheckOut/CheckOut";

export const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="productos" element={<ItemListContainer />} />
        <Route path="productos/:categoria" element={<ItemListContainer />} />
        <Route path="contacto" element={<Contacto/>}></Route>
        <Route path="carrito" element={<Carrito/>}></Route>
        <Route path="checkout" element={<CheckOut/>}></Route>


      </Routes>
    </>
  );
};
