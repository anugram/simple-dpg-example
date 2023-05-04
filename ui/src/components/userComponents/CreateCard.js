import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

async function addCard(cardDetails) {
    const reqHeaders = { 
        'Content-Type': 'application/json',
        'Authorization': `Basic ${sessionStorage.getItem('credentials')}` 
    };
    return fetch('http://localhost:8080/api/cards/save', {
      method: 'POST',
      headers: reqHeaders,
      body: JSON.stringify(cardDetails)
    }).then(data => data.json())
}

function CreateCard() {
    const navigate = useNavigate();

    const [ssn, setSsn] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvvNumber, setCvvNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await addCard({
            ssn,
            cardNumber,
            cvvNumber,
            expiryDate,
            contactNumber,
            dateOfBirth,
            firstName,
            lastName
        });
        console.log(response)
        navigate('/user/home/cards');
    };
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
                                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Add Card</a>
                            </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <div className="flex flex-no-wrap items-start">
                        <div className="w-full ">
                            <div className="py-4 px-2">
                            <div>
                                <div className="mt-10 px-7">
                                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">                        
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Credit Card Number
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        onChange={e => setCardNumber(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            CVV
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        onChange={e => setCvvNumber(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Expiry Date
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        type="Date"
                                        onChange={e => setExpiryDate(e.target.value)}
                                        />
                                    </div>                        
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            SSN
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        type="Password"
                                        onChange={e => setSsn(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            First Name
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        onChange={e => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Last Name
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        onChange={e => setLastName(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Contact Number
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        onChange={e => setContactNumber(e.target.value)}
                                        />
                                    </div>                        
                                    <div>
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Date of Birth
                                        </p>
                                        <input 
                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                        type="Date"
                                        onChange={e => setDateOfBirth(e.target.value)}
                                        />
                                    </div>
                                </div>
                                </div>
                                
                                <hr className="h-[1px] bg-gray-100 my-14" />
                                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                <button 
                                    className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                                    onClick={handleSubmit}
                                >
                                    Add Card
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateCard