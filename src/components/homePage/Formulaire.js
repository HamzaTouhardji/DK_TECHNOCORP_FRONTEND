import { useParams } from "react-router-dom";
import React, { useState } from 'react';

export default function Add() {
    // get the username from route params
    const { id } = useParams();

    const [formValue, setFormValue] = useState({
        founder: "",
        name: "",
        content: "",
    });

    const changeHandler = (event) => {
        if (event) {
            const { name, value } = event.target;
            setFormValue((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        }
    };

    function submitForm() {
        fetch('http://127.0.0.1:8000/api/', {
            method: 'POST',
            body: JSON.stringify(formValue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((data) => console.log(data));

        setFormValue({
            founder: "",
            name: "",
            content: "",
        });
    }

    const { founder, name, content } = formValue;


    const fromContent = [
        {
            name: "Votre nom",
            itemName: "founder",
            type: 1
        },
        {
            name: "Le nom de votre société",
            itemName: "name",
            type: 1
        },
        {
            name: "Le type",
            itemName: "content",
            type: 1
        },
    ]
    return (
        <div className="flex flex-row justify-center items-center mb-10">
            <div className="mt-5 md:mt-0 md:col-span-2">
                <h1 className="my-20 text-5xl text-gray-800"> {id} </h1>
                <div className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        {fromContent.map((item) => (
                            <div key={item.itemName} className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    {item.name}
                                </label>
                                <input
                                    className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder={item.name}

                                    name={item.itemName}
                                    onChange={changeHandler}
                                />
                                {/*this.isComplete ? <p className="text-red-500 text-xs italic">Please fill out this field.</p> : ""*/}
                            </div>
                        ))}

                    </div>
                    <input type="submit" onClick={submitForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                </div>
            </div>
        </div>

    );
}



