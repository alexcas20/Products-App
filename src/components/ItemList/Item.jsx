import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imagen} alt={product.titulo} />
      <div className="product-info">
        <h4>{product.titulo}</h4>
        <p>Precio: ${product.precio}</p>
        <p>Categoria: {product.categoria}</p>
        <Link className="ver-mas" to={`/item/${product.id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  );
};
