import { UsingDucts } from "./api"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export const Cards = (props) => {
   const ref = useRef(new Array())

   const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
         entry.target.classList.replace('opacity-40', 'opacity-100')
         entry.target.classList.replace('shadow-md', 'shadow-xl')
      } else {
         entry.target.classList.replace('opacity-100', 'opacity-40')
         entry.target.classList.replace('shadow-xl', 'shadow-md')
      }
   }, { threshold: 0.8 })

   ref.current.map((el) => {
      if (el != undefined) {
         observer.observe(el)
      }
   })

   return UsingDucts().map((prod) => {
      if (prod.rating.rate > 4.4) {
         return (
            <Link to={"/products/" + prod.id} ref={(elem) => ref.current[prod.id] = elem} key={prod.id} className="card snap-center bg-white h-64 rounded-md font-sans border-b-4 border-rose-700 shadow-cards transition-all ease-in-out duration-500 opacity-40 z-0 lg:h-[22rem] lg:text-xl">
               <div className="img w-[55vw] h-[60%] rounded-t-md overflow-hidden flex justify-center bg-gray-200 sm:w-[28vw] lg:w-[24vw] xl:w-[20vw]"><img src={prod.image} className="h-full" alt="" /></div>
               <div className="title h-[5.5ch] leading-[1.125] p-3 overflow-hidden text-gray-600">{prod.title}</div>
               <div className="desc flex justify-between items-center p-4 lg:my-3">
                  <div className="price text-xl font-semibold lg:text-2xl">${prod.price}</div>
                  <div className="rate text-gray-600"><FontAwesomeIcon className='text-orange-300' icon={faStar} />{prod.rating.rate}</div>
               </div>
            </Link>
         )
      }
   })

}