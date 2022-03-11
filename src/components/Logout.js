import React from 'react'
import { useCookies } from "react-cookie";

export default function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const logout = () => {
        removeCookie("user_token");
    }

    return (
        <button
            onClick={logout}
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Logout
        </button>
    )
}
