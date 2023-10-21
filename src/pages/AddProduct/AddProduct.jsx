

const AddProduct = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // console.log('Form submitted with values:', { image, name, brand, type, price, description, rating });
    };
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-rose-900 text-center mt-10">Add Product</h1>
            <form onSubmit={handleFormSubmit}>
                <div className=" w-[300px] md:w-[460px] lg:w-[600px] mx-auto">

                    <div className="card-body ">


                        <input
                            type="text"
                            placeholder="Product Photo Url"
                            name="photo"

                            required
                            className="input input-bordered input-secondary w-full" />


                        <input
                            type="text"
                            placeholder="Product Name"
                            name="name"

                            required
                            className="input input-bordered input-secondary w-full" />

                        <input
                            type="text"
                            placeholder="Brand Name"
                            name="brandName"

                            required
                            className="input input-bordered input-secondary w-full" />

                        <select name="category" className="select select-bordered ">
                            <option value="">Select a category</option>
                            <option value="Foundation">Foundation</option>
                            <option value="Serum">Serum</option>
                            <option value="Shampo">Shampo</option>
                            <option value="Perfume">Perfume</option>

                        </select>



                        <input type="text" placeholder="Price" name="price" required className="input input-bordered input-secondary w-full" />

                        <input
                            type="text" placeholder="Description"
                            name="description" required
                            className="input input-bordered input-secondary w-full" />
                            <input type="number" placeholder="Rating" name="rating" required className="input input-bordered input-secondary w-full" />

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