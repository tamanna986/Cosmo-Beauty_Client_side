import { useLoaderData } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";


const MyCart = () => {
    const carts = useLoaderData();
    return (
        <div className="mx-auto container my-20 ">
            <h1 className="text-2xl mx-auto text-center text-rose-900 font-bold mb-20">My Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-5">
                     
            {
                carts.map(cart => 
                <CartProduct key = {cart._id}
                cart = {cart}>
                

                </CartProduct>)
            }
        </div>
        </div>
    );
};

export default MyCart;