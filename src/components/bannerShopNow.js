import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export function ShopNow(props) {
   const ref = useRef()

   const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
         entry.target.classList.replace('bg-145%', 'bg-160%')
      } else {
         entry.target.classList.replace('bg-160%', 'bg-145%')
      }
   }, { threshold: 1 })

   useEffect(() => {
      observer.observe(ref.current)
   })

   let elClass = "bg-gray-700 bg-145% bg-blend-soft-light bg-bottom sm:bg-center bg-no-repeat p-7 rounded-sm transition-all duration-700 ease-in-out shadow-md flex flex-col justify-between shadow-black lg:w-5/12 xl:h-[30rem] lg:h-[25rem] lg:bg-none lg:bg-zinc-800 lg:shadow-none lg:text-zinc-100 lg:py-7 lg:p-12  " + props.bg

   let lgClass = "hidden lg:h-[25rem] xl:h-[30rem] w-5/12 bg-center bg-cover lg:flex " + props.bg

   return (
      <section className='px-5 sm:px-20 py-3 text-white font-sans flex my-8 lg:py-12 justify-center items-center'>
         <div ref={ref} className={elClass}>
            <div className="flex flex-col lg:gap-5">
               <p className='text-4xl font-bold lg:text-5xl xl:text-6xl'>{props.quote}</p>
               <p className='text-right italic text-white lg:text-zinc-100 lg:text-xl'>{props.person}</p>
            </div>
            <div className='w-full flex justify-end mt-7'>
               <Link to={props.link} className=' border-2 transition-all duration-500 ease-in-out rounded-sm border-rose-600 text-right text-lg font-semibold px-5 py-2 lg:border-rose-700 lg:px-8 lg:text-zinc-100 lg:hover:bg-rose-700' >Shop Now
               </Link>
            </div>
         </div>
         <div className={lgClass}></div>
      </section>
   )
}