import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem("credentials");
        navigate('/login');
    }, [navigate]);
    return (<></>);
}
export default Logout