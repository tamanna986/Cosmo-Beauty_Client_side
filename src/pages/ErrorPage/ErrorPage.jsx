import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-20 items-center justify-center flex flex-col ">
             <img src="https://i.ibb.co/Tw01x09/404.png" alt="" />
            <h1 className="text-pink-400  font-semibold text-lg">Oopsy!</h1>
            <p>This page cannot be displayed!</p>
            <Link to='/' className="text-rose-300 font-bold">Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;