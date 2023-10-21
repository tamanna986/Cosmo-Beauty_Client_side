

const Item = ({item}) => {
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={item.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-pink-400">{item.name}</h2>
    
    <div className="card-actions justify-end">
    <div className="badge badge-outline"><span className="font-semibold ">Brand:</span><span className="text-rose-900 font-bold"> {item.brand}</span></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Item;