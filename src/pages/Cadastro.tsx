import { useEffect } from 'react';

export default function Cadastro() {

    useEffect(() => {
        document.title = 'Cadastro';
    }, []);

    return (
        <>
            <p>Cadastro</p>
        </>
    )
}