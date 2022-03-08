import React from 'react';

export default class Entreprises extends React.Component {
    constructor() {
        super();
        this.deleteEntreprise = this.deleteEntreprise.bind(this);
    }


    // Submit Form
    deleteEntreprise(id_entreprise) {
        fetch('http://127.0.0.1:8000/api/' + id_entreprise, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then((data) => console.log(data));

    }

    fetchUserName(user_id, callback) {
        return fetch('http://127.0.0.1:8000/api/user/' + user_id)
            .then(response => response.json())
            .then(function (result) {
                return result.user_name
            })
    }


    render() {

        const { entreprises } = this.props;
        if (!entreprises || entreprises.length === 0) return <p className="bg-red-700 m-5 p-3 text-center text-white" > Can not find any data, sorry</p >;
        return (
            <div className="justify-center items-center flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Nom de l'entreprise
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Fondateur
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {entreprises.map((item) => (
                                        <tr key={item}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">fetchUserName(item.founder)</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Modifier
                                                </a><br />
                                                <button type="submit" onClick={() => this.deleteEntreprise(item.id)} className="text-indigo-600 hover:text-indigo-900">
                                                    Supprimer
                                                </button>


                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}