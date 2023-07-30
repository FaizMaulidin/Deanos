import { Link } from "react-router-dom"

export const CategBanner = (props) => {

   let elementClass = "flex flex-col bg-center sm:bg-top justify-end h-48 w-5/12 capitalize rounded-sm px-2 py-1.5 bg-gray-600 bg-cover bg-blend-soft-light border-b-4 border-r-3 shadow-cards border-rose-900 lg:w-full lg:h-[13rem] xl:h-[17rem] lg:bg-145% lg:hover:bg-160% transition-all duration-700 " + props.img

   switch (props.name) {
      case "electronics":
         elementClass = "flex flex-col bg-center sm:bg-top justify-end h-48 w-5/12 capitalize rounded-sm px-2 py-1.5 bg-gray-600 bg-cover bg-blend-soft-light transition-all duration-500 ease-in-out border-b-4 border-r-3 shadow-cards border-rose-900 lg:w-full lg:row-span-2 lg:col-span-2 lg:h-auto lg:bg-145% lg:hover:bg-160% transition-all duration-700 " + props.img
         break
      case "men's outfit":
         elementClass = "flex flex-col bg-center sm:bg-top justify-end h-48 w-5/12 capitalize rounded-sm px-2 py-1.5 bg-gray-600 bg-cover bg-blend-soft-light transition-all duration-500 ease-in-out border-b-4 border-r-3 shadow-cards border-rose-900 lg:w-full lg:row-span-2 lg:h-auto lg:bg-145% lg:hover:bg-160% transition-all duration-700 " + props.img
         break
   }

   return (
      <Link to={props.link} className={elementClass}>{props.name}</Link>
   )
}