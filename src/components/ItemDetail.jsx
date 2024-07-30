
export const ItemDetail = ({item}) => {
  return (
    <article className="detail-container">
        <div className="producto-img">
            <img src={item.imagen} alt={item.titulo} />
            <div className="producto-info">
                <h3 className="titulo" >{item.titulo}</h3>
                <p className="descripcion">{item.description}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">${item.precio}</p>
            </div>
        </div>
    </article>
  )
}
