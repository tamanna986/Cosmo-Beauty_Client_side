

const Product = ({product}) => {
   
  
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
           
  <figure><img src={product.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.brandName}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default Product;