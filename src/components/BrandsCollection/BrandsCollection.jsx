import { Link } from "react-router-dom";


const BrandsCollection = ({brand}) => {
    return (
        <div className=" mx-auto ">
      <Link to={`/products/${brand.brandName}`}>
      <img className="w-28 h-28 rounded-full" src= {brand.photo}/>
       <h2 className="text-center font-bold text-rose-800 italic mt-1">{brand.brandName}</h2>
      </Link>
</div>
    );
};

export default BrandsCollection;