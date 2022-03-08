import React from 'react'
const content = [
    {
        title: 'Besoin d\'aide?',
        content: [
            { text: "Contacter un expert comptable" },
            { text: "Contacter un juriste" },
        ],
    },
    {
        title: 'Lancez-vous !',
        content: [
            { text: "Créer une SARL" },
            { text: "Créer une SI" },
            { text: "Créer une SAS" },
        ],
    },
]

function HelpUs() {
    return (
        <div class="flex w-full  justify-center">
            {content.map((item) => (
                <div class="w-96 mx-5 py-4 px-8  bg-white shadow-lg rounded-lg">
                    <div class="h-48">
                        <h2 class="text-gray-800 text-3xl font-semibold">{item.title}</h2>
                        {item.content.map((textItem) => (
                            <p class="mt-2 text-gray-600">{textItem.text}</p>

                        ))}
                    </div>
                    <div class="flex justify-end mt-4  relative ">
                        <a href="/" class="text-xl font-medium text-indigo-500 absolute bottom-0">En savoir plus !</a>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default HelpUs