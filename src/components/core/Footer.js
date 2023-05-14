import React from 'react';
import { ThemeContext } from './themeContext'

//Data
import { navLinks } from "../../data/navLinks";
import { socialMedia } from "../../data/socialMedia";
import { me } from "../../data/me";

//Pict
import logoIcon from '../../assets/logo-icon.svg';
import logoIconWhite from '../../assets/logo-icon-white.svg';
import FooterChild from './FooterChild';

const Footer = () => {
    const { theme } = React.useContext(ThemeContext)
    return(
        <footer className="flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white pt-8 pb-4 ">
            <div className="grid grid-cols-12 mx-8 lg:mx-32">
                <div className="col-span-12 lg:col-span-3 mb-4 lg:mb-8">
                    <img className="mx-auto mb-5 w-20 lg:w-24" src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-full" height="0" width="0"/>
                    <p className="text-center text-base lg:text-medium lg:text-left w-60 lg:w-52 mx-auto">このサイトは誰でも日本語を学べるサイトです。</p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-3 col-span-12 lg:col-span-9 space-y-0 mt-5 lg:mt-0 lg:ml-20 text-center lg:text-left">
                    <FooterChild title={'Navigation'} data={navLinks}/>
                    <FooterChild targetBlank title={'Social'} data={socialMedia}/>
                    <FooterChild targetBlank title={'Developer'} data={me}/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row text-center lg:text-left text-sm space-y-4 lg:space-y-0 mb-32 mt-6 mx-8 lg:mb-0 lg:mx-44">
                <span className="">
                    <span>愛している ありがとう.</span>
                    <a className="hover:text-primary border-dashed border-b-2 border-gray-900 dark:border-gray-50 hover:border-primary dark:hover:border-primary" href="https://www.animedex.live/" target="_blank" rel="noreferrer"> 🧡 🧡</a> 
                </span>
                <span className="lg:ml-auto">
                    <span>Амжилт </span>
                    <a className="hover:text-primary border-dashed border-b-2 border-gray-900 dark:border-gray-50 hover:border-primary dark:hover:border-primary" href="https://kanjiapi.dev/" target="_blank" rel="noreferrer">🧡</a> 
                    <span> Хичээгээрэй </span>
                    <a className="hover:text-primary border-dashed border-b-2 border-gray-900 dark:border-gray-50 hover:border-primary dark:hover:border-primary" href="https://jisho.org/forum/54fefc1f6e73340b1f160000-is-there-any-kind-of-search-api" target="_blank" rel="noreferrer">🧡</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
