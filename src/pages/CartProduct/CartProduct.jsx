import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2'


const CartProduct = ({ cart,updatedCarts, setUpdatedCarts }) => {
  const { _id  } = cart;

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/myCart/${_id}`, {
  method: 'DELETE'
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if (data.deletedCount > 0) {
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
   
    // to show remaining product on ui  after deleting
    const remaining = updatedCarts.filter(updatedCart => updatedCart._id !== _id)
    setUpdatedCarts(remaining);
   
  }
})
.catch(error => {
  console.error('Error:', error);
});



      }
    })


  }
  return (
    <div className="card  bg-base-100 shadow-xl mx-6 md:mx-0">
      <figure><img className="  w-64 h-52" src={cart.photo} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title text-rose-900">
          {cart.name}</h2>
        <div className="flex gap-10">
          <p className="bold">Price: $ {cart.price}</p> <RiDeleteBin6Line onClick={() => handleDelete(_id)}></RiDeleteBin6Line>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;