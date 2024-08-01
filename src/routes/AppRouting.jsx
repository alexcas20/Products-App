import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";

export const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="productos" element={<ItemListContainer />} />
        <Route path="productos/:categoria" element={<ItemListContainer />} />
      </Routes>
    </>
  );
};
