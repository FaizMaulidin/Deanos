import './App.css';
import { FlashSale } from './components/flashSale';
import { Navbar } from './components/nonAPI/navbar';
import { ShopNow } from './components/nonAPI/bannerShopNow';
import { CategBanner } from './components/nonAPI/bannerCategories';
import { Wrapper } from './components/nonAPI/mostRatedWrap';
import Footer from './components/nonAPI/footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {

   return (
      <>
         <Navbar />
         <section className='py-3 flex flex-wrap gap-3 justify-center text-white font-semibold font-sans tracking-wider text-xl mt-40 lg:mt-24 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:px-12 lg:text-2xl lg:font-bold'>
            <CategBanner name="electronics" img='bg-[url("./assets/ele.jpg")]' link='/categories/electronics' />
            <CategBanner name="men's outfit" img='bg-[url("./assets/men.jpg")]' link='/categories/mens-outfit' />
            <CategBanner name="women's outfit" img='bg-[url("./assets/wom.jpg")]' link='/categories/womens-outfit' />
            <CategBanner name="jewelry" img='bg-[url("./assets/jew.jpg")]' link='/categories/jewelry' />
         </section>
         <section className='my-6 lg:my-10 lg:flex lg:justify-center'>
            <div className=" ml-4 rounded-l-lg py-5 pl-5 pr-2 font-sans flex gap-6 items-center max-w-full shadow-md shadow-zinc-800/70 bg-zinc-800 lg:w-[70vw] lg:rounded-lg lg:ml-0">
               <div className="text-6xl text-center font-extrabold text-slate-200 tracking-wide italic lg:w-6/12 lg:flex lg:items-center lg:flex-col lg:py-16">
                  <div className="text-5xl leading-6 tracking-wider lg:ml-7 text-rose-700 lg:text-8xl lg:leading-10">FLASH</div>
                  <div className="flex lg:text-9xl lg:justify-center">SALE</div>
                  <div className="text-sm font-semibold py-1 bg-rose-500 rounded-xl lg:text-xl lg:rounded-full lg:w-3/4">Starts at 18:00</div>
               </div>
               <div className="flex gap-3 w-fit overflow-y-hidden overflow-x-scroll p-2 lg:w-6/12 lg:grid lg:overflow-hidden lg:grid-cols-3 lg:grid-flow-row">
                  <FlashSale />
               </div>
            </div>
         </section>
         <ShopNow quote='"Nothing tastes as good as looking good feels."' person='- Tony Robbins' bg="bg-look-good" link='/categories/womens-outfit' />
         <section className=' my-3 py-2 border-y-8 border-gray-200 border-solid lg:py-12'>
            <div>
               <p className='font-sans font-bold text-center text-gray-700 text-2xl lg:text-4xl'>Most Rated Products</p>
               <div className="flex justify-center mb-3 items-center">
                  <Wrapper />
               </div>
            </div>
         </section>
         <ShopNow quote='Experience the cutting-edge technology of our latest gadget.' bg='bg-gadget' link='/categories/electronics' />
         <Footer />
         <SpeedInsights/>
      </>
   )
}

export default App;
