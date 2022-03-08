import React from "react";
import { useEffect } from "react";

const people = [
    {
        name: 'Vivian Davie',
        href: 'https://randomuser.me/api/portraits/women/43.jpg',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        name: 'Derry Harris',
        href: 'https://randomuser.me/api/portraits/men/81.jpg',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        name: 'Aliesha Hanson',
        href: 'https://randomuser.me/api/portraits/women/2.jpg',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        name: 'Cristina Frederick',
        href: 'https://randomuser.me/api/portraits/women/13.jpg',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        name: 'Aliesha Hanson',
        href: 'https://randomuser.me/api/portraits/women/3.jpg',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        name: 'Cristina Frederick',
        href: 'https://randomuser.me/api/portraits/women/12.jpg',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },

]
let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.8) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function Carousel() {
    useEffect(() => {
        document.getElementById("next").addEventListener("click", goNext);
        document.getElementById("prev").addEventListener("click", goPrev);
    }, []);

    return (
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            <div className="w-full relative flex items-center justify-center">
                <button aria-label="slide backward" className="absolute z-30 left-0 ml-10 focus:outline-none bg-white p-5 rounded-full focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                    <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                        {people.map((item) => (
                            <div key={item.href} className="flex items-center justify-center flex-col bg-gray-700 p-10 rounded-lg w-1/4 mr-5 ml-5 h-full space-y-4flex flex-shrink-0 relative">
                                <img className="rounded-full border-gray-100 shadow-sm  object-cover object-center" src={item.href} alt={item.name} />
                                <h1 className="text-gray-50 font-semibold">{item.name}</h1>
                                <p className="text-gray-50 mt-3">{item.content}</p>
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <button aria-label="slide forward" className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 bg-white p-5 rounded-full focus:ring-offset-2 focus:ring-gray-400" id="next">
                    <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Carousel;