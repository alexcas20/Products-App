import { useEffect, useState } from "react";
import { getData } from "../../helpers/getData";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
    getData().then((res) => {
      if (categoria != undefined) {
        const filtro = res.filter((prod) => prod.categoria === categoria);
        setProducts(filtro);
        setTitulo(categoria);
      } else{
        setProducts(res);
        setTitulo("productos");
      } 
    });
  }, [categoria]);

  return (
    <section className="container-list">
      <ItemList products={products} titulo={titulo} />
    </section>
  );
};
