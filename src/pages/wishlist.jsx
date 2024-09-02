import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/navbar'
import Footer from '../components/nonAPI/footer'
import WishProducts from '../components/wishProducts'
import { ray } from '../components/api'

const Wishlist = () => {
    const wishRef = useRef()
    const [comps, setComps] = useState([])

    useEffect(() => {
        wishRef.current.click()
    }, [])

    const update = () => {
        setComps([...comps])
    }

    useEffect(() => {
        let wishCount = 0
        ray.map((item) => {
            let condCount = 0
            if (item.wishlist) { condCount = 1 }
            wishCount += condCount
        })
        if (wishCount === 0) {
            wishRef.current.innerHTML = "Your wishlist is empty."
            wishRef.current.classList = "mx-3 text-center font-sans pt-12 text-zinc-400 text-xl italic"
        }
    })

    return (
        <div className='bg-zinc-100 min-h-screen flex  flex-col justify-between'>
            <div className="">
                <Navbar />
                <div className="mt-40 mx-3 lg:mt-24 lg:mx-20 md:mx-16">
                    <div className="font-sans flex p-2 pb-3 font-bold items-center tracking-wide text-2xl gap-5 justify-center text-zinc-100 bg-rose-900 rounded-t-lg">
                        <div>Wishlist</div>
                    </div>
                    <div onClick={update} ref={wishRef} className="sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-3">
                        {ray.map((item, i) => (<WishProducts key={i} prodId={item.productId} wishlist={item.wishlist} />))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist