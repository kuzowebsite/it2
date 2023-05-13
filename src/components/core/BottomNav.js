import React, {useState} from 'react'
import { navLinks } from "../../data/navLinks";
import BottomNavLink from './BottomNavLink'
import SearchBox from '../SearchBox'

const BottomNav = () =>{
    const [searchShow, setSearchShow] = useState(false)

    const handleSearchShow = () => {
        if (searchShow) {
            setSearchShow(false);
        } else {
            setSearchShow(true);
        }
        console.log(searchShow);
    }
    const iconClose =   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor"  d="M17.25 6.75L6.75 17.25"></path>
                            <path stroke="currentColor"  d="M6.75 6.75L17.25 17.25"></path>
                        </svg>
    const iconSearch =  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                        </svg>
    return(
        <nav className="fixed flex lg:hidden justify-center bottom-0 left-0 z-10 w-screen bg-white dark:bg-[#070d1a] h-20">
            <div className="w-full">
                <div className={(searchShow ? "flex" : "hidden")+" mx-6 pt-6"}>
                    <div className="w-full">
                        <SearchBox/>
                    </div>
                </div>
                <ul className={(searchShow ? "hidden" : "flex h-full")}>
                {
                    navLinks.map((nav, idx) => {
                        return  <BottomNavLink key={idx} title={nav.title} icon={nav.icon} path={nav.path}/>
                    })
                }
                </ul>
            </div>
            <button aria-label="Search" onClick={handleSearchShow} className="absolute -top-12 bg-gray-50 shadow-md dark:bg-[#192236] focus:outline-none active:ring-2 active:ring-primary ring-offset-2 dark:ring-offset-transparent rounded-full p-4 dark:text-white">
                {(searchShow ? iconClose : iconSearch)}
            </button>
        </nav>
    )
}

export default BottomNav;