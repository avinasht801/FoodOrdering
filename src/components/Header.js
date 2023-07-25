import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";
import Logo from './img/logo.png';
import Avatar from './img/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue()

const login = async () =>{
  const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
  dispatch({
    type: actionType.SET_USER,
    user: providerData[0],
  })
};

  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
      {/* Desktop view */}
      <div className='hidden md:flex w-full h-full p-4 items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <ul className='flex item-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
          </ul>
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
          </div>
        </div>

      </div>

      {/* Mobile view */}
      <div className='flex md:hidden w-full h-full p-4'>

      </div>

    </header>
  )
}

export default Header