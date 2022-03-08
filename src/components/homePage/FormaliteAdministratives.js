import React from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';

const solutions = [
    {
        title: 'Simple',
        text: 'Repondez à un questionnaire trés simple et intuitif en ligne ou dans le point de vente le plus proche de chez vous'
    },
    {
        title: 'Pas chère',
        text: 'Nos tarifs sont transparents, il n\'y a pas de frais cachés'
    },
    {
        title: 'Rapide',
        text: 'Une fois toutes les informations du questionnaire remplis, vous obtenez votre K-BIS en moins de 48h'
    },
]

export default function FormaliteAdministratives() {
    return (
        <section className=" bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden " >
            <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                    <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
                        Formalité administrative
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center -mx-4 h-72">
                    {solutions.map((item) => (
                        <div key={item} className="w-full h-full md:w-1/3 lg:w-1/3 px-4">
                            <div className="bg-white h-full rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
                                <h2 className="font-bold text-dark mb-5 text-[42px]">
                                    {item.title} <AddTaskIcon color="success" className=" ml-5 " sx={{ width: 40, height: 40 }} />
                                </h2>
                                <div className="mb-7">
                                    <p className="text-base text-body-color leading-loose mb-1">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
