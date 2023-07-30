import { UsingDucts } from "./api"
import { Link } from "react-router-dom"

export const FlashSale = () => {
   return UsingDucts().map((prod, i) => {
      if (prod.id < 8 && prod.id != 6) {
         const random = Math.floor(Math.random() * (65 - 35) + 35)
         function Discount() {
            const harga = prod.price - prod.price * random / 100
            return {
               'disc': random + "%",
               'oldPrice': "$" + prod.price,
               'newPrice': "$" + harga.toFixed(2)
            }
         }
         return (
            <Link to={"/products/" + prod.id} key={i} className="h-36 w-28 bg-white rounded-md shadow-gray-300/50 shadow-md lg:w-full">
               <div className="w-full h-20 bg-slate-500 rounded-t-md overflow-hidden">
                  <img src={prod.image} />
               </div>
               <div className="desc w-28 h-14 px-2 flex flex-col justify-evenly">
                  <div className="newprice font-semibold text-lg text-gray-800">{Discount().newPrice}</div>
                  <div className="oldprice flex gap-1 items-center">
                     <div className="disc font-bold text-sm text-center items-center text-orange-600 bg-orange-200 rounded px-1">{Discount().disc}</div>
                     <div className="linethru line-through text-sm text-gray-600">{Discount().oldPrice}</div>
                  </div>
               </div>
            </Link>
         )
      }
   })
}