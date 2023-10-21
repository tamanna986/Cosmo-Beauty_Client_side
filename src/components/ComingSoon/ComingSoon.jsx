import { useEffect, useState } from "react";
import Item from "../Item/Item";


const ComingSoon = () => {
    const [comingItem, setComingItem] = useState([])
    useEffect(() =>{
        fetch('comingSoon.json')
        .then(res => res.json())
        .then(data => setComingItem(data))
       
        
    },[])
    return (
        <div className="container mx-auto my-20">
            <h1 className="font-bold text-3xl text-center text-rose-900">Coming Soon</h1>
            <hr className="w-56 mb-10  mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
            
            {
             comingItem.map(item =>
                  
              <Item
              key = {item.id}
              
              item ={item}></Item>)
            }
         </div>
        </div>
    );
};

export default ComingSoon;