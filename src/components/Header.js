'use client';
import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from './img/logo.png';
import Avatar from './img/avatar.png';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
    else {
      setIsMenu(!isMenu)
    }
  };

  const logout = () =>{
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user:null,
    });
  };

  return (
    <header className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/* Desktop view */}
      <div className='hidden md:flex w-full h-full p-4 items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>Foodie</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}

            className='flex item-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={()=>setIsMenu(false)}>About us</li>
          </motion.ul>
          <div className='relative flex item-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>
                2
              </p>
            </div>
          </div>
          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt='avatar'
              className='w-10 min-w-[40px] h-10 min-h-[40px] dropshadow-xl cursor-pointer rounded-full'
              onClick={login}
            />
            {
              isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
                  {
                    user && user.email === "getavi07@gmail.com" && (
                      <Link to={'/createItem'}>
                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base '>New Item <MdAdd /></p>
                        
                      </Link>
                    )
                  }
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base  'onClick={logout}>Logout <MdLogout /></p>
                </motion.div>
              )
            }
          </div>
        </div>

      </div>

      {/* Mobile view */}
      <div className='flex md:hidden w-full h-full p-4 items-center justify-between'>
      <div className='relative flex item-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>
                2
              </p>
            </div>
          </div>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>Foodie</p>
        </Link>
        <div className='relative'>
          <motion.img whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt='avatar'
            className='w-10 min-w-[40px] h-10 min-h-[40px] dropshadow-xl cursor-pointer rounded-full'
            onClick={login}
          />
          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
                {
                  user && user.email === "getavi07@gmail.com" && (
                    <Link to={'/createItem'}>
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base '>New Item <MdAdd /></p>

                    </Link>
                  )
                }

                <ul className='flex flex-col item-center '>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' onClick={()=> setIsMenu(false)}>Home</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' onClick={()=> setIsMenu(false)}>Menu</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' onClick={()=> setIsMenu(false)}>About us</li>
                </ul>


                <p className='px-4 py-2 m-2 rounded-md shadow-md flex items-center justify-center gap-3 cursor-pointer bg-blue-200 hover:bg-blue-400 transition-all duration-100 ease-in-out text-textColor text-base ' onClick={logout}>Logout <MdLogout /></p>
              </motion.div>
            )
          }
        </div>
      </div>

    </header>
  )
}

export default Header
