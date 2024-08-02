import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { Contacto } from "../components/contacto/Contacto";

export const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="productos" element={<ItemListContainer />} />
        <Route path="productos/:categoria" element={<ItemListContainer />} />
        <Route path="contacto" element={<Contacto/>}></Route>
      </Routes>
    </>
  );
};
