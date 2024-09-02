import { CartProducts } from "../components/cartProducts"
import { useEffect, useState, useRef } from "react"
import { UpTotalPrice } from "../components/nonAPI/cartLogic"
import { ray } from "../components/api"
import { Navbar } from "../components/nonAPI/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components//nonAPI/footer"

export const Cart = () => {
   const [comps, setComps] = useState([])

   useEffect(() => {
      setComps([...comps])
      UpTotalPrice()
   }, [])

   const update = () => {
      setComps([...comps])
      const carts = document.querySelector('.carts')
      setTimeout(() => {
         if (carts.innerHTML !== null) {
            carts.click()
         }
      }, 100);
   }

   const checkAll = () => {
      const pickAll = document.querySelector('.pick')
      const check = document.querySelectorAll('.check')
      pickAll.classList.toggle('bg-rose-700')
      if (pickAll.classList.contains('bg-rose-700')) {
         check.forEach(el => {
            el.classList.add('bg-rose-700')
         })
      } else {
         check.forEach(element => {
            element.classList.remove('bg-rose-700')
         });
      }
   }

   useEffect(() => {
      const carts = document.querySelector('.carts')
      let rayCount = 0
      ray.map((item) => {
         if (item.quantity) { rayCount += item.quantity } else {
            rayCount = rayCount
         }
      })
      if (rayCount === 0) {
         carts.innerHTML = "Your shopping cart is empty."
         carts.classList = "carts mb-28 text-center font-sans pt-12 text-zinc-400 text-xl italic"
      }
   })

   return (
      <div className="bg-zinc-100 flex flex-col min-h-screen justify-between">
         <div>
            <Navbar />
            <div className="mt-40 lg:mt-24 lg:w-7/12 lg:p-2 mx-3 md:mx-16">
               <div className="font-sans flex p-2 pb-4 font-bold items-center text-2xl gap-5 justify-center text-zinc-100 bg-rose-900 rounded-t-lg lg:justify-normal lg:px-4 lg:p-2">
                  <div>Shopping Cart</div>
               </div>
               <div onClick={update} className="carts mb-28 bg-white lg:mb-8">
                  <div className="items-center font-sans text-zinc-400 px-4 py-2 border-b-2 italic">
                     <div onClick={checkAll} className="flex gap-2 w-fit cursor-pointer">
                        <div className="pick px-[0.25rem] h-6 w-fit rounded-sm flex items-center border-[2px] text-sm transition-all ease-in-out border-inactive text-inactive duration-200"><FontAwesomeIcon icon={faCheck} /></div> Pick all items
                     </div>
                  </div>
                  {ray.map((item, i) => (<CartProducts key={i} prodId={item.productId} qty={item.quantity} />))}
               </div>
            </div>
         </div>
         <div className="bg-white font-sans hidden text-zinc-700 fixed top-[6.5rem] right-24 w-3/12 h-fit rounded-lg px-8 py-5 flex-col gap-5 lg:flex">
            <div className="flex justify-between font-bold text-xl items-end">
               <p className="tracking-wide text-xl">Total Price</p>
               <p className="text-2xl tracking-wide">$<UpTotalPrice /></p>
            </div>
            <div className="">
               <button className=" bg-rose-800 text-zinc-100 px-5 py-2 rounded-md font-bold w-full">Checkout</button>
            </div>
         </div>
         <div className=" bg-rose-800 w-screen h-24 fixed bottom-0 right-0 rounded-t-md items-center py-4 font-sans px-5 text-zinc-100 lg:hidden md:w-[85vw] md:translate-x-[50%] md:right-[50%] md:px-10 ">
            <div className="flex justify-between mt-2 font-medium text-xl items-center">
               <div className="">
                  <p className="tracking-wide text-lg leading-4">Total Price</p>
                  <p className="font-bold text-2xl tracking-wide">$<UpTotalPrice /></p>
               </div>
               <div className=" bg-zinc-100 text-rose-700 px-5 py-2 rounded-md font-bold">Checkout</div>
            </div>
         </div>
         <div className="hidden lg:block">
            <Footer />
         </div>
      </div>
   )
}