import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});



    useEffect(() =>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    console.log(product)

    return (
<div className="container mx-auto my-20 bg-pink-50">
<div className="hero min-h-screen  p-10 rounded-md shadow-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={product.photo} className=" rounded-lg shadow-2xl w-64 h-52 " />
    <div>
    <div className="flex gap-5 items-center">
    <h1 className="text-3xl font-bold text-rose-900">{product.name}</h1>
      <h1 className="badge badge-outline ">$ {product.price}</h1>
    </div>
      <p className="py-6 text-gray-600">{product.description}</p>
      <button className="btn bg-rose-900 text-rose-100">Add to Cart</button>
    </div>
  </div>
</div>
</div>
    );
};

export default ProductDetail;