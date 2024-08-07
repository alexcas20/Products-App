export const ItemCount = ({
  cantidad,
  handleSumar,
  handleRestar,
  handleAgregar,
}) => {
  return (
    <>
      <div className="container-count">
        <button className="container-count-btn" onClick={handleRestar}>
          -
        </button>
        <p>{cantidad}</p>
        <button className="container-count-btn" onClick={handleSumar}>
          +
        </button>
      </div>
      <button className="container-count-add" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </>
  );
};
