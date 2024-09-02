import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const AllCard = (props) => {
    return (
        <Link to={props.link} className='bg-white h-80 rounded-md font-sans border-b-4 border-rose-700 shadow-cards transition-all ease-in-out duration-500 text-lg w-7/12 sm:w-[40vw] md:w-full lg:h-[17rem] xl:h-80'>
            <div className="img w-full h-[60%] rounded-t-md overflow-hidden flex justify-center bg-gray-200"><img src={props.prod.image} className="h-full" alt="" /></div>
            <div className="title h-[5.5ch] leading-[1.125] p-3 overflow-hidden text-gray-600">{props.prod.title}</div>
            <div className="desc flex justify-between items-center p-4 py-3 mt-3 lg:mt-2">
                <div className="price text-xl font-bold text-gray-800">${props.prod.price}</div>
                <div className="rate text-gray-600">
                    <FontAwesomeIcon className='text-orange-300' icon={faStar}/>{props.prod.rate}
                </div>
            </div>
        </Link>
    )
}

export default AllCard