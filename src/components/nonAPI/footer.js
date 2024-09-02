import React from 'react'

const Footer = () => {
    return (
        <section className='mt-5 font-sans bg-rose-900 rounded-t-md text-white text-center py-12 px-5'>
            <div className="text-4xl font-bold mb-2">Newsletter</div>
            <div className="flex gap-2 justify-center">
                <input className='rounded-sm p-1 text-black' type="text" placeholder='your@email.com' />
                <button className='bg-zinc-100 text-zinc-700 px-2 rounded-sm font-semibold'>Subscribe</button>
            </div>
            <ul className='flex justify-center flex-wrap mb-6 mt-10 gap-8 font-semibold text-lg'>
                <a href="#"><li>About</li></a>
                <a href="#"><li>FAQs</li></a>
                <a href="#"><li>News</li></a>
                <a href="#"><li>Contact Us</li></a>
            </ul>
            <p className=''>Designed and Developed by FaizMD</p>
        </section>
    )
}

export default Footer