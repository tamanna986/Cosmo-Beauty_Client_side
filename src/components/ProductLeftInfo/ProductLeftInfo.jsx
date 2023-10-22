
import { FcApproval} from "react-icons/fc";
import {AiOutlineStar } from "react-icons/ai";
const ProductLeftInfo = ({product}) => {
    return (
        <div className="flex gap-5 space-y-7 md:space-y-3">
            <h1 className="w-[1px] h-[92%] md:h-[80%] bg-rose-900 my-auto "></h1>
          
            <div>
            <h1 className="text-center text-rose-900 text-xl my-1 md:mt-16 md:mb-6 font-semibold">Related Info</h1>
            <p className="text-pink-400 flex items-center gap-1"><FcApproval></FcApproval> <span className="text-lg text-rose-900">  Type: </span>{product.category}</p>
            <p className="text-pink-400 flex items-center gap-1"><FcApproval></FcApproval> <span className="text-lg text-rose-900"> Brand Name: </span>{product.brandName}</p>
            <p className="text-pink-400 flex items-center gap-1"><FcApproval></FcApproval> <span className="text-lg text-rose-900"> Ratings: </span>{product.rating} <AiOutlineStar></AiOutlineStar></p>
          
          
            </div>
        </div>
    );
};

export default ProductLeftInfo;