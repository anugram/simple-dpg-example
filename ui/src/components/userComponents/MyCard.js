import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyCard() {
    const navigate = useNavigate();
    const [cards, setCards] = useState("");
    const AuthStr = `Basic ${sessionStorage.getItem('credentials')}`
    useEffect(() => {
        axios
        .get('http://localhost:3001/express/list/cards/all', {headers: { Authorization: AuthStr }})
        .then((res) => {
            console.log(res.data.cards)
            setCards(res.data.cards);
        })
        .catch((err) => console.log(err));
    }, [navigate]);

    const rows = {};
    for (const card of cards) {
        if (card.userId in rows) {
          rows[card.userId].push(card);
        } else {
          rows[card.userId] = [card];
        }
    }
    return(
        <div className="container py-10 px-6 mx-auto">            
            <div className="relative bg-white z-10 -mt-8 mb-8 w-full">
                <div className="w-full flex">
                    <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </a>
                            </li>
                            <li>
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">All Cards</a>
                            </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Name</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">SSN</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Credit Card</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">CVV</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {Object.entries(rows).map((entry) => {
                        const row = entry[0];
                        const details = entry[1];
                        return(
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {details[0].firstName} {details[0].lastName}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].ssn}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].cardNumber}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].cvvNumber}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>        
    )
}
export default MyCard