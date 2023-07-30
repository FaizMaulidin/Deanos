import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faX, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ScrollPosition } from './navScroll';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
   const ref = useRef()
   const search = useRef()
   const searchBars = useRef()

   const openMenu = () => {
      ref.current.classList.replace('left-[100vw]', 'left-0')
   }
   const closeMenu = () => {
      ref.current.classList.replace('left-0', 'left-[100vw]')
   }

   const sorry = () => {
      if (search.current.value) {
         searchBars.current.classList.remove('hidden')
      } else { searchBars.current.classList.toggle('hidden') }
   }
   const sorryBlur = () => searchBars.current.classList.add('hidden')

   return (
      <section>
         <div style={{ transform: "translateY(-" + ScrollPosition().navScroll + "px)" }} className="text-center bg-rose-900 py-4 text-zinc-100 font-sans rounded-b-md w-screen fixed top-0 right-0 z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:px-8">
            <Link to="/">
               <div className="text-6xl font-extrabold px-8 pb-1 rounded-full text-center text-rose-900 bg-zinc-100 w-fit m-auto lg:text-3xl">
                  Deano's
               </div>
            </Link>
            <div className="flex font-sans justify-evenly items-center text-2xl lg:justify-between lg:w-8/12">
               <div className='w-7/12 md:w-9/12 lg:w-10/12 bg-slate-700'>
                  <input onBlur={sorryBlur} onChange={sorry} type="text" ref={search} placeholder="Search Products" className='flex w-full rounded-sm text-lg px-2 py-0.5 text-slate-900' />
                  <div ref={searchBars} className="absolute bg-white text-zinc-500 text-lg border-[1px] border-zinc-400 w-7/12 hidden py-3 px-2 rounded-b-sm lg:w-5/12">
                     Sorry, this feature isn't available yet.🥺 <br /> You can find all the products in the "Categories" menu.
                  </div>
               </div>
               <Link to='/wishlist'>
                  <FontAwesomeIcon icon={faHeart} />
               </Link>
               <Link to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
               </Link>
               <button className='lg:hidden' onClick={openMenu}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className="line bg-zinc-100 w-[1px] h-8 hidden lg:flex"></div>
            <div className="hidden w-2/12 gap-5 justify-evenly lg:flex">
               <Link to="/categories" >Categories</Link>
               <Link to="/" >Home</Link>
            </div>
         </div>
         <div ref={ref} className="fixed z-20 top-0 left-[100vw] bg-zinc-100 w-screen h-screen font-sans font-semibold text-zinc-800 p-4 transition-all ease-in-out duration-700">
            <div className="flex border-b-2 border-zinc-500 pb-4 font-bold items-center text-3xl gap-5">
               <button onClick={closeMenu} className="text-3xl">
                  <FontAwesomeIcon icon={faX} />
               </button> Main Menu
            </div>
            <div onClick={closeMenu} className="text-2xl text-left pr-24 py-7 font-bold text-rose-700">
               All Products
               <ul className="border-b-2 flex flex-col py-3 gap-3 border-zinc-300 font-semibold text-zinc-700 text-xl">
                  <li><Link to="/categories">Categories</Link></li>
                  <li><a href="#">Flash Sale</a></li>
                  <li><a href="#">Most Rated Products</a></li>
               </ul>
               My Activity
               <ul className="border-b-2 flex flex-col py-3 gap-3 border-zinc-300 text-zinc-700 font-semibold text-xl">
                  <li><Link to="/cart">Shopping Cart</Link></li>
                  <li><Link to="/wishlist" >Wishlist</Link></li>
                  <li><Link to="/">Home</Link></li>
               </ul>
            </div>
         </div>
      </section>
   )

}