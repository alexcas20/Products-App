import { useEffect, useState } from "react";
import { getItemId } from "../helpers/getData";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemId(itemId).then((res) => setItem(res));
  }, []);

  return <section>{item && <ItemDetail item={item} />}</section>;
};
