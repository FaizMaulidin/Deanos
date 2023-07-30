import React, { useEffect, useState } from 'react'
import { UsingDucts, addCart, removeWish } from './api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const WishProducts = (props) => {

   const popup = (id, act) => {
      let idWish = "wish" + id
      const wishPopup = document.getElementById(idWish)

      if (act === 'open'){
         return wishPopup.classList.replace('hidden', 'flex')
      } else {
         return wishPopup.classList.replace('flex', 'hidden')
      }
   }

   return UsingDucts().map((prod) => {
      if (props.wishlist === true) {
         if (prod.id === props.prodId) {

            const added = () => {
               const el = document.getElementById('btn-add-cart' + prod.id)
               el.classList.add('bg-rose-700')
               el.classList.replace('text-rose-700', 'text-zinc-100')
               el.innerHTML = "Added to cart"
               setTimeout(() => {
                  el.classList.remove('bg-rose-700')
                  el.classList.replace('text-zinc-100', 'text-rose-700')
                  el.innerHTML = "+ Add to cart"
               }, 1000);
            }

            return (
               <div key={prod.id}>
                  <div className="z-20 pt-8 pb-4 font-sans border-b-2 border-rose-700 md:px-4 lg:px-6 bg-white">
                     <Link to={"/products/" + prod.id} className="flex items-center justify-center sm:w-fit sm:justify-normal mx-2 gap-6 text-zinc-600">
                        <div className="overflow-hidden w-24 h-24 bg-zinc-300 rounded-md flex justify-center lg:h-20 lg:w-20">
                           <img className="h-full" src={prod.image} alt="" />
                        </div>
                        <div className="h-24 w-9/12 leading-5 text-lg flex flex-col sm:w-6/12 justify-between lg:text-base lg:w-10/12">
                           <div className="max-h-[2.5rem] overflow-hidden lg:max-h-[3.25rem]">{prod.title}</div>
                           <div className="flex justify-between items-end md:justify-normal lg:items-center gap-3">
                              <div className="font-semibold text-zinc-800 flex text-xl lg:text-lg">$<p className="priceexcl">{prod.price}</p></div>
                              <div className="h-6 w-[2px] hidden md:flex bg-zinc-400"></div>
                              <div className="text mb-1 lg:mb-0"><FontAwesomeIcon className='text-orange-300' icon={faStar} />{prod.rating.rate}</div>
                           </div>
                        </div>
                     </Link>
                     <div className="flex justify-end text-zinc-500 text-lg px-6 md:px-0 pt-7 md:pt-4 gap-2 sm:gap-4 lg:gap-2 lg:text-base">
                        <button onClick={() => popup(prod.id, 'open')} className='border-[1px] border-zinc-500 rounded-md px-2' >
                           <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button id={'btn-add-cart' + prod.id} onClick={() => {
                           addCart(prod.id, 1)
                           added()
                        }} className='border-[1px] border-rose-700 rounded-md px-2 text-rose-700 transition-all duration-500 ease-in-out' >+ Add to cart</button>
                     </div>
                     <div id={"wish" + prod.id} className="z-30 bg-black/50 h-[200vh] w-[200vw] fixed top-[50%] left-[50%] -translate-y-[51%] -translate-x-[50%] hidden items-center justify-center">
                        <div className="bg-zinc-100 px-4 py-5 rounded-[0.25rem] w-[65vw] text-zinc-600 sm:w-[40vw] md:w-[35vw] lg:w-72">
                           <div className="pb-4 border-b-[1px] border-zinc-400 text-base">Remove this item from wishlist?</div>
                           <div className="py-1 flex gap-5 justify-end font-bold">
                              <button onClick={() => popup(prod.id, 'close')}>Cancel</button>
                              <button onClick={() => { removeWish(prod.id); popup(prod.id, 'close') }} className="text-rose-600">OK</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )
         }
      }

   })
}

export default WishProducts