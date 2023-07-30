import { Cards } from "./mostRated"

export const Wrapper = () => {

   return (
      <div className="wrapper snap-proximity snap-x mt-4 flex gap-5 w-9/12 py-5 overflow-x-scroll px-10 rounded-md shadow-card-wrapper lg:mt-8 lg:w-[60vw] lg:gap-16 xl:gap-20 lg:snap-none lg:px-16 xl:px-20">
         <Cards />
      </div>
   )
}