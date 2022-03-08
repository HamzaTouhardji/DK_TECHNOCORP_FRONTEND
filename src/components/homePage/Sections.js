import React from 'react'
import ButtonSection from './ButtonSection'

const solutions = [
    {
        name: 'Créer votre entreprise',
        liens: [
            { name: "Creer votre SARL" },
            { name: "Creer votre EURL" },
            { name: "Creer votre SAS" },
            { name: "Creer votre SASU" },
            { name: "Creer votre SCI" },
            { name: "Creer mon Auto entreprise" },
        ],
        href: '/creer-son-entreprise',
    },
    {
        name: 'Modification d\'entreprise',
        liens: [
            { name: "Je veux acheter ou vendre des parts" },
            { name: "Je veux changer de gérant (SARL, EURL, SCI)" },
            { name: "Je veux changer de président" },
            { name: "Je veux changer de (SAS, SASU)" },
            { name: "Je veux changer, ajouter ou supprimer une partie de l'objet social" },
            { name: "Je veux changer m'adresse du siège social de mon entreprise" },
            { name: "Je veux changer la dénomination social de mon entreprise" },
            { name: "Je veux augmenter le capital de mon entreprise" },
            { name: "Je veux diminuer le capital de mon entreprise" },
            { name: "Je veux transformer mon SAS en SARL" },
            { name: "Je veux transformer mon SARL en SAS" },
        ],
        href: '/modifier-son-entreprise',
    },
    {
        name: 'Qui somme nous ?',
        liens: [
            { name: "Notre histoire" },
            { name: "Notre objectif" },
            { name: "Pourquoi nous choisir ?" },
        ],
        href: '#',
    },
    {
        name: 'Ou nous trouver ?',
        liens: [
            { name: "Carte de nos point de vente" },
            { name: "Liste des points de ventes" },
            { name: "Demander à être appler" },
            { name: "Envoyer nous un message" },
        ],
        href: '#',
    },
    {
        name: 'Bibliothèque juridique',
        liens: [
            { name: "Choisir entre SAS et SARL" },
            { name: "Qu'est ce que la SARL (EURL)" },
            { name: "Qu'est ce que la SAS (SASU)" },
            { name: "Qu'est ce que la SCI" },
            { name: "Est ce que je suis obligatoirement soumis à la TVA" },
            { name: "Qu'est ce que l'auto entrepreunatiat" },
            { name: "Foire au questions / Forum" },
        ],
        href: '#',
    },
]

export default function Sections() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-5 mb-5 text-center">
            {solutions.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg"
                >
                    <ButtonSection name={item.name} liens={item.liens} />
                </a>
            ))}
        </div>
    )
}
