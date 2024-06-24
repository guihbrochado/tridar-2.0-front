"use client"

import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('http://homologacao.tridar.log.br/login', {
                email,
                password
            });

            // Process the response as needed
            console.log(response.data);
            setIsLoading(false);
        } catch (error: any) {
            console.error('Erro no login:', error);
            if (error.response) {
                // A request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError('Erro no login. Verifique suas credenciais e tente novamente.');
            } else if (error.request) {
                // The request was made but no response was received
                setError('Erro de rede. Por favor, verifique sua conexão.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError('Erro desconhecido. Por favor, tente novamente.');
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full flex min-h-screen flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-2 rounded-md transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Carregando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}

