import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Box = (box) => {
    return (
        <li id={box.elId} className='border-[1px] border-zinc-400 flex items-center transition-all ease-in-out duration-300 lg:w-3/12'><Link className='w-full h-full flex items-center justify-center py-1' to={box.to}>{box.name}</Link></li>
    )
}

const CategTopList = (props) => {

    useEffect(() => {
        const currentView = document.getElementById(props.view)
        const notCurrentView = document.querySelectorAll('.mt-40 ul li')

        currentView.classList.replace('border-zinc-400', 'border-rose-800')
        currentView.classList.add('bg-rose-800', 'text-zinc-100')

        notCurrentView.forEach(element => {
            if (props.view !== element.getAttribute('id')){
                element.classList.replace('border-rose-800', 'border-zinc-400')
                element.classList.remove('bg-rose-800', 'text-zinc-100')
            }
        })
    })


    return (
        <div className='mt-40 font-sans px-4 flex flex-col items-center gap-2 text-lg font-semibold text-zinc-700 lg:mt-24 lg:text-sm' >
            <div id='all' className="w-full text-center border-[1px] border-zinc-400 py-1 lg:w-2/12"><Link to="/categories" className='flex justify-center w-full'>All Categories</Link></div>
            <ul className='grid grid-cols-2 text-center gap-2 w-full lg:flex lg:w-6/12 xl:w-5/12'>
                <Box elId='ele' name='Electronics' to="/categories/electronics" />
                <Box elId='men' name="Men's Outfit" to="/categories/mens-outfit" />
                <Box elId='wom' name="Women's Outfit" to="/categories/womens-outfit" />
                <Box elId='jew' name='Jewelry' to="/categories/jewelry" />
            </ul>
        </div>
    )
}

export default CategTopList