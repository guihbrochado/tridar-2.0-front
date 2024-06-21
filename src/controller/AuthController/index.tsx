import { useState } from 'react';
import clientAxios from '@/lib/axios/clientAxios';
import { useLoginStore } from '@/zustand/StoreAuth/store';
import Cookies from 'js-cookie';

export function useAuthController() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { setUserInfo } = useLoginStore();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await clientAxios.post('/login', {
                email,
                password
            });

            // Armazenar o token como um cookie
            Cookies.set('accessToken', response.data.token);

            setIsLoading(false);
            setUserInfo(response.data);
            window.location.replace('/dashboard');
        } catch (error: any) {
            console.error('Erro no login:', error);
            if (error.response) {
                setError('Erro no login. Verifique suas credenciais e tente novamente.');
            } else if (error.request) {
                setError('Erro de rede. Por favor, verifique sua conexão.');
            } else {
                setError('Erro desconhecido. Por favor, tente novamente.');
            }
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        // Limpar o cookie de accessToken
        Cookies.remove('accessToken');

        // Limpar informações do usuário
        setUserInfo(null);

        // Redirecionar para a página de login
        window.location.replace('/login');
    };

    return {
        handleLogin,
        email,
        password,
        setPassword,
        isLoading,
        error,
        setEmail
    };
}
