import React, { useEffect, useState } from 'react'
import { UsingDucts, addCart, addWish, ray, removeWish } from '../components/api'
import { Navbar } from '../components/nonAPI/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/nonAPI/footer'

const Products = (props) => {
   const [getInp, setInp] = useState()
   const [love, setLove] = useState()

   useEffect(() => {
      const inp = document.querySelector('.addcart input')
      const loveEl = document.querySelector('.love')
      setInp(inp)
      setLove(loveEl)
   })

   return UsingDucts().map((prod) => {
      if (prod.id == props.id) {
         
         ray.map((item) => {
            if (prod.id === item.productId && item.wishlist === true) {
               if (love) {
                  love.classList.add('text-rose-700')
               }
            }
         })

         const added = () => {
            const el = document.getElementById('btn-add-cart')
            el.classList.add('bg-rose-700')
            el.classList.replace('text-rose-700', 'text-zinc-100')
            el.innerHTML = "Added to cart"
            setTimeout(() => {
               el.classList.remove('bg-rose-700')
               el.classList.replace('text-zinc-100', 'text-rose-700')
               el.innerHTML = "Add to cart"
            }, 1000);
         }

         return (
            <div key={prod.id} className='mt-36 lg:mt-28'>
               <Navbar />
               <div className="allwrap font-sans text-2xl text-zinc-800 lg:justify-center lg:flex lg:gap-12 lg:mb-16 ">
                  <div className="img w-full h-[20rem] bg-gray-200 flex justify-center lg:w-4/12">
                     <img src={prod.image} className='h-full' />
                  </div>
                  <div className="min-h-full w-[4px] bg-zinc-300 hidden lg:flex"></div>
                  <div className="desc pt-3 flex flex-col gap-6 pb-5 sm:mx-8 mx-3 lg:w-6/12 lg:mx-0 lg:p-0">
                     <div className="atas flex justify-between">
                        <div className="title lg:w-9/12">{prod.title}</div>
                        <div className='text-zinc-400'>
                           <div onClick={() => {
                              love.classList.toggle('text-rose-700')
                              if (love.classList.contains('text-rose-700')) { addWish(prod.id) } else { removeWish(prod.id) }
                           }} className="love transition-all duration-300 text-4xl cursor-pointer">
                              <FontAwesomeIcon icon={faHeart} />
                           </div>
                        </div>
                     </div>
                     <div className="price-rate flex items-center gap-3">
                        <div className="price font font-bold text-3xl">${prod.price}</div>
                        <h1 className='text-3xl  text-zinc-500'>|</h1>
                        <div className="rate "><FontAwesomeIcon className='text-orange-300' icon={faStar} /> {prod.rating.rate}</div>
                     </div>
                     <div className="addcart flex flex-col items-end mt-3 gap-2">
                        <div className="count flex justify-between text-4xl items-center border-[1px] px-5 py-0 rounded-[0.25rem] h-10 border-zinc-400 text-rose-700 w-6/12 sm:w-4/12">
                           <button onClick={() => {
                              let count = parseInt(getInp.value)
                              if (count > 1) {
                                 count -= 1
                              } else { count = '' }
                              getInp.value = count
                           }} className="leading-5 mb-1">-</button>
                           <input type="number" className="qty w-[5ch] text-zinc-700 bg-zinc-100 text-2xl text-center rounded-md h-5" placeholder='0' />
                           <button onClick={() => {
                              let count = 0
                              if (getInp.value === '') {
                                 count = 0
                              } else {
                                 count = parseInt(getInp.value)
                              }
                              count += 1
                              getInp.value = count
                           }} className="mb-1.5 leading-5">+</button>
                        </div>
                        <button id='btn-add-cart' onClick={() => {
                           let count = 0
                           if (getInp.value == 0) {
                              count = 0
                           } else {count = parseInt(getInp.value)}
                           addCart(prod.id, count)
                           added()
                        }} className='rounded-[0.25rem] font-semibold text-rose-700 border-rose-700 border-2 text-lg w-1/2 h-10 sm:w-4/12 transition-all duration-500 ease-in-out'>Add to cart</button>
                     </div>
                     <div className="min-w-full h-[2px] bg-rose-700"></div>
                     <div className="w-full flex flex-col gap-2 lg:px-0">
                        <h1 className='font-semibold text-2xl text-zinc-700'>Description</h1>
                        <p className='text-lg text-zinc-600'>{prod.description}</p>
                     </div>
                  </div>
               </div>
               <Footer />
            </div>
         )
      }
   })
}

export default Products