import { Item } from "./Item"

export const ItemList = ({products}) => {
  return (
    <>
        <h2 className="title-products">Products </h2>
        <article className="list">
            {
                products.map((product) => <Item key={product.id} product={product} />  )
            }
        </article>
    </>
  )
}
