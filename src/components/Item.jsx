export const Item = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imagen} />
      <div className="product-info">
        <h4>{product.titulo}</h4>
        <p>Precio: ${product.precio}</p>
        <p>Categoria: ${product.categoria}</p>
        <a className="ver-mas" href={`/item/${product.id}`}>
          Ver mas
        </a>
      </div>
    </div>
  );
};
