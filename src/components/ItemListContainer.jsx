import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    getData().then((res) => { 
        setProducts(res)
    });
  }, []);

  return (

    <section className="container-list">
        <ItemList products={products}/>

    </section>
  )
};
