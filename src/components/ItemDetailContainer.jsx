import { useEffect, useState } from "react";
import { getItemId } from "../helpers/getData";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);

  const paramId = useParams().id;


  useEffect(() => {
    getItemId(Number(paramId)).then((res) => setItem(res));
  }, []);

  return <section>{item && <ItemDetail item={item} />}</section>;
};
