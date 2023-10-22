import { useLoaderData } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import BrandsCollection from "../../components/BrandsCollection/BrandsCollection";


const Home = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto ">
            <h1 className="text-3xl font-bold text-rose-900 text-center mt-20">Brands collection</h1>
            <hr className="w-64 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 ">
                {
                    brands.map(brand  => 
                    <BrandsCollection 
                    key ={brand._id}
                    brand = {brand} 
                    ></BrandsCollection>)
                }
            </div>
            </div>
            <ComingSoon></ComingSoon>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;