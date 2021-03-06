/* This example requires Tailwind CSS v2.0+ */
import { Link } from 'react-router-dom'
const content = [
    { name: "Creer votre SARL" },
    { name: "Creer votre EURL" },
    { name: "Creer votre SAS" },
    { name: "Creer votre SASU" },
    { name: "Creer votre SCI" },
    { name: "Creer mon Auto entreprise" },
]

export default function Example({ }) {
    return (
        <div className="flex flex-col">
            {content.map((text) => (
                <div key={text.name} className="border m-3 flex items-center px-6 py-4 whitespace-nowrap">
                    <div className="ml-4">
                        <Link to={`/formulaire/${text.name}`} className="text-sm font-medium text-gray-900">{text.name}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
