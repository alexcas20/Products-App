import { Item } from "./Item"

export const ItemList = ({products, titulo}) => {
  return (
    <>
        <h2 className="title-products">{titulo} </h2>
        <article className="list">
            {
                products.map((product) => <Item key={product.id} product={product} />  )
            }
        </article>
    </>
  )
}
