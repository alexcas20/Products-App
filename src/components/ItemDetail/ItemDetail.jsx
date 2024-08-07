import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount";
import { CardContext } from "../../context/CardContext";

export const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  //context
  const { agregarAlCarrito} = useContext(CardContext);

  const handleRestar = () => {
    cantidad > 1 && setCantidad((prev) => prev - 1);
  };
  const handleSumar = () => {
    cantidad < item.stock && setCantidad((prev) => prev + 1);
  };


  return (
    <article className="detail-container">
      <div className="producto-img">
        <img src={item.imagen} alt={item.titulo} />
        <div className="producto-info">
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.description}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => agregarAlCarrito(item, cantidad)}
          />
        </div>
      </div>
    </article>
  );
};
