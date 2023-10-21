

const Banner = () => {
    return (
<div className="hero h-[620px] " style={{backgroundImage: 'url(https://i.ibb.co/5nKWYJJ/b.jpg)'}}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-3xl md:text-5xl font-bold"> <span className="text-rose-900">Cosmo</span> <span className="text-pink-300">Beauty <span className="text-rose-900 mb-5">'S</span></span> <br /> OUDGASM COLLECTION</h1>
      <p className="mb-5 text-lg">Crafted with passion, designed to magnify the magic of Beauty.</p>
      <hr className="mb-5 " />
      <p className=" text-pink-200 font-bold">Free shipping starts over $60+</p>
    </div>
  </div>
</div>
    );
};

export default Banner;