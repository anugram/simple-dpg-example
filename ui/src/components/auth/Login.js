import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';

function Login() {

    const navigate = useNavigate();
    const [error, setError]=useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        if(((username === 'backend') || (username === 'user')) && (password === 'admin')) {
            const base64encodedData = Buffer.from(`${username}:${password}`).toString('base64');
            sessionStorage.setItem('credentials', base64encodedData)
        }
        else {
            setError('Invalid username or password')
        }

        if(username === 'backend')
            navigate('/admin/home/cards')
        else if(username === 'user')
            navigate('/user/home/cards')
        else
            navigate('/login')
    }

    return(
        <div class="flex mb-4">
            <div class="w-1/4 h-full bg-gray-100"></div>
            <div class="w-1/2 h-full bg-gray-100">
                <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-full">
                    <label className="mt-8 text-base leading-4 text-gray-800">Login Credentials</label>
                    <div className="mt-8">
                        <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="mt-8">
                        <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full" onClick={handleSubmit}>
                        <div>
                            <p className="text-base leading-4">Login</p>
                        </div>
                    </button>
                    <div>{error}</div>
                </div>
            </div>
        </div>
    )
}
export default Login