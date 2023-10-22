import { Link } from "react-router-dom";
import ProductLeftInfo from "../../components/ProductLeftInfo/ProductLeftInfo";


const Product = ({product}) => {
   
  
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 my-20 bg-pink-50 p-10 rounded-lg mx-5 lg:mx-auto">
            <div className="card bg-base-100 shadow-xl md:w-3/4">
        <figure><img className="w-64 h-52 p-4" src= {product.photo} /></figure>
        <div className="card-body flex flex-row items-center justify-center gap-5 bg-orange-100 ">
          <h2 className="card-title text-rose-900">
            {product.name}
          </h2>
          <h1 className=" text-xl  ">${product.price}</h1>
          
          
          </div>
        </div>

        <ProductLeftInfo product = {product}></ProductLeftInfo>
        <Link to ={`/product/${product._id}`} >
        <button className="btn bg-rose-900 text-pink-50 w-full">Details</button>
        </Link>
        <Link to = {`/products/${product._id}`}>
        <button className="btn bg-rose-900 text-pink-50 w-full">Update</button>
        </Link>
        
        </div>
     
    );
};

export default Product;