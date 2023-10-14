
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import auth from '../../firebase-init/firebase.init';

const Navebar = () => {
    const { user, logOut } = useContext(AuthContext)
   console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => console.log(logOut) )
            .catch(error => console.error(error.massage))
    }

    const navlink = <>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <div className="flex items-center">
                <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4 border-red-500" : ""
  }>Home</NavLink>
            </div>

        </li>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <div className="flex items-center">
                <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4 border-red-500" : ""
  }>About Us</NavLink>
            </div>

        </li>

        {
            user && <>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <div className="flex items-center">
                <NavLink to="/contact" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-4 border-red-500" : ""
  }>Contact us</NavLink>
            </div>

        </li>
            
             </>
        }

    </>
    return (
        <div>
            <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div className="flex items-center text-gray-900">
                    <a
                        href="/"
                        className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
                    >
                        Material Tailwind
                    </a>
                    <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                        {navlink}

                    </ul>


                    {
                        user?<div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL? user.photoURL : user.email.slice(0,2)} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                         
                            <li>{user.email}</li>
                            <li>{user.displayName}</li>

                            <li><button onClick={handleLogOut} className='bg-[#865be9] p-3 rounded-md mt-4  text-[#ffffff]   ' >Sing Out</button></li>
                        </ul>
                    </div>:  <span><>{<NavLink to="login" >Login</NavLink>}</></span>
                    }

               

                    


                    <button
                        className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        data-collapse-target="sticky-navar"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div
                    className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                    data-collapse="sticky-navar"
                >
                    <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2">
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Pages
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Account
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Blocks
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Docs
                            </a>
                        </li>
                        <button
                            className="mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            <span><>{<NavLink to="login">Login</NavLink>}</></span>
                        </button>
                    </ul>

               
                </div>
            </nav>

        </div>
    );
};

export default Navebar;