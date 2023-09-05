import SinglePage from "../../components/SinglePage/SinglePage"
import { singleProduct } from "../../data"
import "./Product.scss"

const Product = () => {
  return (
    <div className="product">
      <SinglePage {...singleProduct}/>
    </div>
  )
}

export default Product