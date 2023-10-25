import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = { photo, name, brandName, category, price, description, rating };
        console.log(newProduct)

        // send data to the server

        fetch('https://cosmo-beauty.vercel.app/product' , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })

    };
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-rose-900 text-center mt-10">Add Product</h1>
            <form onSubmit={handleFormSubmit}>
                <div className=" w-[300px] md:w-[500px] lg:w-[600px] mx-auto">

                    <div className="card-body ">
                        <div className="flex justify-center items-center">

                            <label className="label">
                                <span className="label-text t text-lg py-3 px-8 bg-pink-100  text-rose-900 rounded-lg">Photo</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Photo Url"
                                name="photo"

                                required
                                className="input input-bordered input-secondary w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-8 bg-pink-100  text-rose-900 rounded-lg">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                name="name"

                                required
                                className="input input-bordered input-secondary w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-8 bg-pink-100  text-rose-900 rounded-lg">Brand</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Brand Name"
                                name="brandName"

                                required
                                className="input input-bordered input-secondary w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-5 bg-pink-100  text-rose-900 rounded-lg">Category</span>
                            </label>

                            <select name="category" className="select select-bordered w-full ">
                                <option value="">Select a category</option>
                                <option value="Foundation">Foundation</option>
                                <option value="Serum">Serum</option>
                                <option value="Shampo">Shampo</option>
                                <option value="Perfume">Perfume</option>

                            </select>
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-9 bg-pink-100  text-rose-900 rounded-lg">Price</span>
                            </label>


                            <input type="text" placeholder="Price" name="price" required className="input input-bordered input-secondary w-full" />
                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg p-3 bg-pink-100  text-rose-900 rounded-lg">Description</span>
                            </label>
                            <input
                                type="text" placeholder="Description"
                                name="description" required
                                className="input input-bordered input-secondary w-full" />


                        </div>

                        <div className="flex justify-center items-center">
                            <label className="label">
                                <span className="label-text t text-lg py-3 px-8 bg-pink-100  text-rose-900 rounded-lg">Rating</span>
                            </label>

                            <input type="number" placeholder="Rating" name="rating" required className="input input-bordered input-secondary w-full" />
                        </div>

                        <div className="form-control ">
                            <button className="btn  bg-rose-900 text-white ">Add Product</button>
                        </div>
                    </div>







                </div>





            </form>
        </div>
    );
};

export default AddProduct;