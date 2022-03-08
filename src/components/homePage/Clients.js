import React from 'react'

const content = [
    {
        src: "https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg",
        alt: "image1"
    },
    {
        src: "https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg",
        alt: "image2"
    },
    {
        src: "https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg",
        alt: "image3"
    },
    {
        src: "https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg",
        alt: "image4"
    },
]


export default function Clients() {
    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <h1 class="text-5xl">Nos partenaire</h1>
                        <div className="flex flex-wrap justify-center items-center">
                            {content.map((item) => (
                                <div className=" w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 " >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-10"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
