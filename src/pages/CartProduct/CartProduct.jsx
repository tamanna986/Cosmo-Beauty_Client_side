import {  RiDeleteBin6Line } from "react-icons/ri";

const CartProduct = ({cart}) => {
    return (
        <div className="card  bg-base-100 shadow-xl mx-6 md:mx-0">

        <figure><img className="  w-64 h-52"  src={cart.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-rose-900">
            {cart.name}</h2>
           <div className="flex gap-10">
           <p className="bold">Price: {cart.price}</p> <RiDeleteBin6Line></RiDeleteBin6Line>
           </div>
        </div>
      </div>
    );
};

export default CartProduct;