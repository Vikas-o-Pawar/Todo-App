import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckLoggedIn from './useCheckLoggedIn';

export function useCheckLoggedInAndRedirect() {
    const isLoggedIn = useCheckLoggedIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [navigate, isLoggedIn]);
}
