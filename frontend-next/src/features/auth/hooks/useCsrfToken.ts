"use client";

import {useState,useEffect} from 'react';
import Cookies from "js-cookie";

import {getCsrfToken} from '../api/csrf';

const useCsrfToken = () => {
    const [token, setToken] = useState<string>();

    useEffect(() => {
        getCsrfToken().then((data) => {
            setToken(data.csrfToken)
        })
    }, []);
    
    return token;
}

export default useCsrfToken;


