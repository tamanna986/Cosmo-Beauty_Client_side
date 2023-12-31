import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiChevronsDown } from "react-icons/fi";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut();
  }


  const navLinks =
  <>
    <li className="text-rose-900"><NavLink to='/' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>Home</NavLink></li>
    <li className="text-rose-900"><NavLink to='/addProduct' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>Add Product</NavLink></li>
    <li className="text-rose-900"><NavLink to='/myCart' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>My Cart</NavLink></li>
    <li className="text-rose-900"><NavLink to='/Register' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }>Register</NavLink></li>
  </>
    return (


<div className="navbar bg-pink-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <img  className="w-36 md:w-52 " src="https://i.ibb.co/cwswz1p/1.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
            user ? <>

             <div className="dropdown mr-2  md:mr-14">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FiChevronsDown></FiChevronsDown>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48 ">
              
                
                <div className="flex-col mx-0 lg:mx-1">
                <p className="text-pink-700 font-semibold">{user.displayName}</p>
                </div>      
              

              
            </ul>
          </div>
          <div className="hidden lg:flex lg:flex-col mx-0 lg:mx-1">
                <p className="text-pink-700 font-semibold">{user.displayName}</p>
                </div>  
              <img className="w-10 rounded-full mx-1 lg:mx-2" src={user.photoURL} alt="" />
                <button onClick={handleSignOut} className="btn btn-sm bg-rose-900 text-white ">Log Out</button>


        

            </>
              :
              <Link to = "/login"><button className="font-semibold text-rose-900">Log In</button></Link>
          }
  
  </div>
</div>



    );
};

export default Navbar;

