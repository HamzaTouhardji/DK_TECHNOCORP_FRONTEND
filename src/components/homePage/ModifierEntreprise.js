/* This example requires Tailwind CSS v2.0+ */
const content = [
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
]

export default function Example({ }) {
    return (
        <div className="flex flex-col">
            {content.map((text) => (
                <div key={text.name} className="border m-3 flex items-center px-6 py-4 whitespace-nowrap">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{text.name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
