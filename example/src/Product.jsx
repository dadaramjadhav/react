import { useParams, useSearchParams } from "react-router-dom"
import ProductModal from "./ProductModal"

const Product = () => {
  const params = useParams("id")
  const [searchParams, setSearchParams] = useSearchParams()
  const showModal = searchParams.get("modal") === "true"

  return (
    <div>
      Product id is : {params.id}
      <br></br>
      <button onClick={() => setSearchParams({ modal: "true" })}>Open Modal</button>
      {showModal && <ProductModal onClose={() => setSearchParams({})} />}
    </div>
  )
}

export default Product
