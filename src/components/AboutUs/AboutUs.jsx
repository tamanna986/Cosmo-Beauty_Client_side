

const AboutUs = () => {
    return (
        <div className="bg-red-50 mt-20">
            <h1 className="font-bold text-2xl md:text-3xl pt-10 text-center text-rose-900">About Us</h1>

            <hr className="w-56 mx-auto" />
            <div className="flex flex-col  lg:flex-row w-3/4 mx-auto py-20">
                <div className="grid flex-grow  card  rounded-box place-items-center p-10 text-rose-900 text-md md:text-lg w-full " style={{ backgroundImage: 'url(https://i.ibb.co/jRT1Mkh/wave-haikei.png)' }}>Welcome to Cosmo Beauty your ultimate destination for luxury cosmetics and beauty products. We take pride in offering an exquisite selection of premium brands including L'Oréal, Estée Lauder, Chanel, Dior, and Urban Decay,Revlon."</div>
                <div className="divider lg:divider-horizontal px-10">MOREOVER</div>
                <div className="grid flex-grow  card bg-base-100 rounded-box place-items-center p-10 text-rose-900 text-md md:text-lg w-full " style={{ backgroundImage: 'url(https://i.ibb.co/jRT1Mkh/wave-haikei.png)' }}>Our mission is to bring you the latest and most sought-after beauty essentials, curated to help you look and feel your best. With a commitment to quality, authenticity, and innovation, we aim to redefine your beauty experience. Discover a world of timeless elegance and modern glamour with us</div>
            </div>
        </div>
    );
};

export default AboutUs;