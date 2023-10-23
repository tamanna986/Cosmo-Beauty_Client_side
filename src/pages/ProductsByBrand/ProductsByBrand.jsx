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







   <div className="container mx-auto h-[440px] my-20  ">
   <div className="carousel w-full h-full rounded-lg ">
  <div id="slide1" className="carousel-item relative w-full bg-[url('https://i.ibb.co/thVtXcw/as1.png')] bg-cover">
    
       <div className="w-[420PX] md:w-[460PX] mx-auto md:flex justify-center items-center">
        <h1 className="text-center text-2xl md:text-4xl text-white font-bold mt-32 md:-mt-16">Upcoming  Brand kayali! <br /> <span className="text-white lg:text-rose-900">Pre <span className="text-white">book</span> Now</span> </h1>
        
       
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full bg-[url('https://i.ibb.co/zh038RM/S2.jpg')] bg-cover">

        <div className="w-[420PX] mx-auto flex justify-center items-center"><h1 className="text-center text-4xl md:text-8xl text-red-500 font-bold ">20%</h1>
        <img className="w-32 md:w-56" src="https://i.ibb.co/WkxkptX/d-removebg-preview.png" alt="" />
       
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full bg-[url('https://i.ibb.co/1QK9FY1/88846715-christmas-cosmetic-makeup-gift-card-template-100-voucher-silk-satin-glossy-fabric-package-t.jpg')] bg-cover">
  <div className="w-80 md:w-[420PX] mx-auto flex justify-center items-center"><h1 className="text-center text-xl -mt-20 md:-mt-0 md:text-4xl text-white font-bold ">Get Gift Cards by bing Our Valuable Member!</h1>
       
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
   </div>




            <div className="container mx-auto">
         
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
   </div>
    );
};

export default ProductsByBrand;