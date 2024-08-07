import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
  
      const productosRef = collection(db, "productos");

      getDocs(productosRef)
        .then((resp) => {
          setProducts(resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          }))
        })

    
  }, [categoria]);

  return (
    <section className="container-list">
      <ItemList products={products} titulo={titulo} />
    </section>
  );
};
