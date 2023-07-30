import { UsingDucts, addCart, removeCart } from "./api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrashCan, faStar } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useRef } from "react"
import { UpTotalPrice } from "./cartLogic"
import { Link } from "react-router-dom"

export const CartProducts = (props) => {
   const ref = useRef([])
   const inpRef = useRef([])

   useEffect(() => {
      UpTotalPrice()
   })

   return UsingDucts().map((prod) => {
      if (props.qty > 0) {
         if (props.prodId === prod.id) {
            const plus = () => {
               addCart(prod.id, 1)
               upValue('plus')
            }
            const minus = () => {
               if (props.qty > 1) {
                  removeCart(prod.id, 1)
                  upValue('minus')
               }
            }
            const hapus = () => {
               upValue('hapus')
            }
            const check = () => {
               ref.current[prod.id].classList.toggle('bg-rose-700')
            }
            const upValue = (act) => {
               let xxx = inpRef.current[prod.id].value
               let yyy = parseInt(xxx)
               if (act === 'plus') { yyy += 1 }
               if (act === 'minus') {
                  if (yyy > 1) { yyy -= 1 } else { yyy = 0 }
               }
               if (act === 'hapus') { removeCart(prod.id, yyy); yyy = 0 }
               inpRef.current[prod.id].value = yyy.toString()
            }
            const openPopup = () => {
               let idid = "cart" + prod.id
               const popup = document.getElementById(idid)
               popup.classList.replace('hidden', 'flex')
            }
            const closePopup = () => {
               let idid = "cart" + prod.id
               const popup = document.getElementById(idid)
               popup.classList.replace('flex', 'hidden')
            }
            return (
               <div key={prod.id} className="cart-wrapper z-20 px-4 pt-8 pb-4 font-sans border-b-2 border-rose-700 bg-white">
                  <div className="flex items-center text-zinc-600 gap-5">
                     <div onClick={check} ref={(elem) => ref.current[prod.id] = elem} className="check px-[0.5rem] h-9 rounded-sm flex items-center border-[2px] text-lg text-inactive transition-all ease-in-out border-inactive duration-200 cursor-pointer lg:text-sm lg:px-[0.25rem] lg:h-6 lg:w-fit">
                        <FontAwesomeIcon icon={faCheck} />
                     </div>
                     <Link to={"/products/" + prod.id} className="flex h-24 gap-5 w-full lg:w-10/12 lg:h-20">
                        <div className="overflow-hidden w-24 h-full bg-zinc-300 rounded-md flex justify-center lg:w-20">
                           <img className="h-full" src={prod.image} alt="" />
                        </div>
                        <div className="h-full w-6/12 leading-5 text-lg flex flex-col justify-between lg:w-9/12">
                           <div className="max-h-[2.5rem] overflow-hidden">{prod.title}</div>
                           <div className="flex justify-between items-end sm:justify-normal sm:items-center sm:gap-4">
                              <div className="font-semibold text-zinc-800 flex text-xl">$<p className="priceexcl">{prod.price}</p></div>
                              <div className="hidden w-[2px] h-6 bg-zinc-300 sm:flex"></div>
                              <div className="text mb-1 sm:mb-0"><FontAwesomeIcon className='text-orange-300' icon={faStar} />{prod.rating.rate}</div>
                           </div>
                        </div>
                     </Link>
                  </div>
                  <div className="flex justify-end text-zinc-600 mt-8 items-center gap-4 lg:mt-0">
                     <div onClick={() => openPopup(prod.id)} className="bin cursor-pointer text-2xl text-zinc-500">
                        <FontAwesomeIcon icon={faTrashCan} />
                     </div>
                     <div className="count flex gap-2 text-3xl items-center border-[1px] px-2 py-0 rounded-md border-zinc-400 text-rose-700">
                        <button onClick={minus} className="leading-5 mb-1">-</button>
                        <input ref={(elem) => inpRef.current[prod.id] = elem} type="number" className="qty w-14 text-zinc-700 text-xl text-center rounded-md h-5 lg:w-10" value={props.qty} readOnly />
                        <button onClick={plus} className="mb-1.5 leading-5">+</button>
                     </div>
                  </div>
                  <div id={"cart" + prod.id} className="z-30 bg-black/50 h-[200vh] w-[200vw] fixed top-[50%] left-[50%] -translate-y-[51%] -translate-x-[50%] hidden items-center justify-center">
                     <div className="popup bg-zinc-100 px-4 py-5 rounded-[0.25rem] w-[65vw] text-zinc-600 lg:w-[20vw]">
                        <div className="pb-4 border-b-[1px] border-zinc-400 text-[1rem]">Remove this item from cart?</div>
                        <div className="py-1 flex gap-5 justify-end font-bold">
                           <button onClick={() => closePopup()}>Cancel</button>
                           <button onClick={() => { hapus(); closePopup() }} className="text-rose-600">OK</button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         }
      }
   })
}