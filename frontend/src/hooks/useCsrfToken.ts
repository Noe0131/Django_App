import {useEffect} from 'react';


import {getCsrfToken} from '../api/csrf';

export const useCsrfToken = () => {
    useEffect(() => {
        getCsrfToken()
    }, []);
}

export default useCsrfToken;