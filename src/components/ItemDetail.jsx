import { useState } from "react";
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad((prev) => prev - 1);
  }
  const handleSumar = () => {
    cantidad < item.stock && setCantidad((prev) => prev + 1);


  }

  const handleAgregar = () => {
    console.log({...item, cantidad})
  }


  return (
    <article className="detail-container">
        <div className="producto-img">
            <img src={item.imagen} alt={item.titulo} />
            <div className="producto-info">
                <h3 className="titulo" >{item.titulo}</h3>
                <p className="descripcion">{item.description}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
            </div>
        </div>
    </article>
  )
}
