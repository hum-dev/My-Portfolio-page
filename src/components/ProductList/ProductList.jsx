import "./ProductList.css"
import Product from "../Product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Build Websites to fit your need</h1>
                <p className="pl-desc">
                    Come lets create solution for your business,
                    that will help your business grow & icrease customer expirience
                </p>
            </div>
            <div className="pl-list">
                {products.map(item=>(
                    <Product key = {item.id} img={item.img} link= {item.link}/>
                ))}
                

            </div>
        </div>
    )
}
export default ProductList;