import { faAnglesUp } from "@fortawesome/free-solid-svg-icons"
import { UsingDucts } from "../components/api"
import AllCard from "../components/categories/allProdCard"
import CategTopList from "../components/categories/categTopList"
import { Navbar } from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ScrollPosition } from "../components/navScroll"
import Footer from "../components/nonAPI/footer"
import { useEffect } from "react"


export const AllCategories = (props) => {

    let pos = ScrollPosition().scrollPos
    const el = document.querySelector('.up')

    if (el) {
        if (pos > 800) {
            el.classList.replace('-bottom-16', 'bottom-10')
        } else {
            el.classList.replace('bottom-10', '-bottom-16')
        }
    }

    useEffect(() => {
        const currentView = document.getElementById('all')
        currentView.classList.replace('border-zinc-400', 'border-rose-800')
        currentView.classList.add('bg-rose-800', 'text-zinc-100')
    }, [])

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <div>
                <Navbar />
                <CategTopList view='all' />
                <div className="prod-wrapper flex flex-col gap-10 items-center my-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:px-24 xl:px-40 lg:gap-7">
                    {
                        UsingDucts().map((prod, i) => {
                            return (
                                <AllCard key={i} image={prod.image} title={prod.title} price={prod.price} rate={prod.rating.rate} link={"/products/" + prod.id} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
            <button onClick={() => window.scrollTo({
                top: 0, behavior: 'smooth'
            })} className="up fixed -bottom-16 text-3xl right-5 bg-rose-800 text-zinc-100 h-16 w-16 rounded-full transition-all ease-in-out">
                <FontAwesomeIcon icon={faAnglesUp} />
            </button>
        </div>
    )
}