

const AddBrand = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const newBrand = { photo, brandName};
        console.log(newBrand)

                // send data to the server

                fetch('https://cosmo-beauty.vercel.app/brands' , {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newBrand)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
            
                })
    }
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
                                placeholder="Brand Logo Url"
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
                                placeholder="Brand Name"
                                name="brandName"

                                required
                                className="input input-bordered input-secondary w-full" />
                        </div>  
                        <div className="form-control ">
                            <button className="btn  bg-rose-900 text-white ">Add Brand</button>
                        </div>  
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBrand;





