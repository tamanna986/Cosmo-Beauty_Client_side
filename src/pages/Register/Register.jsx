import { useState } from "react";
import { Link } from "react-router-dom";



const Register = () => {
    const [error, setError] = useState('');
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password, photo)
        // check conditions for valid password

        if (password.length < 6) {
            setError('password should be atleast 6 characters or long');
            
            return;
        }
        else if (!/[A-Z]/.test(password)) {

            setError('password should contain atleast one uppercase')
            return;
        }
        else if (!/[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(password)) {

            setError('password should contain atleast one special Character')
            return;
        }
        setError('');

    }
    

    return (
        <div>
            <div className="hero  min-h-screen bg-[url('https://i.ibb.co/R2np3pt/abstract-soft-pink-background-modern-and-clean-banner-landing-page-concept-with-pastel-color-free-ve.jpg')] ">
           
                <form onSubmit={handleSubmitRegister}>
                <h1 className="text-3xl font-bold text-rose-900 text-center mt-10">Register Here</h1>
                    <div className="hero-content  ">

                        <div className="card flex-shrink-0   max-w-sm  backdrop-blur-sm bg-white/30  md:w-[900px] mt-10">
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-rose-900 text-lg">name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"

                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-rose-900 text-lg">Photo </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Photo Url"
                                        name="photo"

                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-rose-900 text-lg">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"

                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-rose-900 text-lg">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                              
                                </div>
                                <div className="form-control mt-2 mb-4">
                                    <button className="btn  bg-rose-900 text-white ">Register</button>
                                   
                                        
                                 
                                </div>

                                


                            </div>
                        </div>
                    </div>

                    <p className="text-rose-900 text-center mb-20">Already have an account? <Link to='/login'><span className="text-red-800 underline font-bold">Login here</span></Link> </p>
                   

                </form>


            </div>
            
        </div>
    );
};

export default Register;