import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import NoProductAvailable from "../../components/NoProductAvailable/NoProductAvailable";


const ProductsByBrand = () => {
    const [products, setProducts] = useState([]);
    const { brandName } = useParams();
    
   

    useEffect(() => {
        const fetchProductsByBrand = async () => {
            const response = await fetch(`http://localhost:5000/products/${brandName}`);
            const data = await response.json();
            setProducts(data);
        };

        fetchProductsByBrand();
    }, [brandName]);
    return (
        <div>
            <h1>{products.length}</h1>
        <h1 className="text-2xl font-bold text-rose-900 text-center mt-10 ">Products for {brandName}</h1>
        <hr className="w-72 mx-auto"/>
        
        
        {products.length > 0 ? (products.map(product =>
                <Product
                key = {product._id}
                product = {product}>
                    
                </Product>
                )) : (
                    <NoProductAvailable></NoProductAvailable>
                )
        }
 
        
    </div>
    );
};

export default ProductsByBrand;