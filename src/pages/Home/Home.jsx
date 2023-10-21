import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import ComingSoon from "../../components/ComingSoon/ComingSoon";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <ComingSoon></ComingSoon>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;