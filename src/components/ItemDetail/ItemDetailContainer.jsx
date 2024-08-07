import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const paramId = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", paramId);

    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, []);

  return <section>{item && <ItemDetail item={item} />}</section>;
};
