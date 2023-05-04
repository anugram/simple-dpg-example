import { Outlet, Navigate } from "react-router-dom";
import {React} from 'react';

function User() {
    const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
        return(
            <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <h2 className="text-2xl font-bold">APP | User</h2>
                    </div>
                </div>
                <div>
                    <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 block">
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/user/home/cards">My Cards</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/user/home/addCard">Add Card</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        )
    };    

    let authToken = true
    return (
        authToken ? <><CustomNavbar /> <Outlet /></> : <Navigate to="/login"/>
    )
}
export default User