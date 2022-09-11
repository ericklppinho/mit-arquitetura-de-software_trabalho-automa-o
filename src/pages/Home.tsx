import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <>
            <p>Hello world!</p>
            <Link to="/login">
                <button type="button">Login</button>
            </Link>
            <br />
            <Link to="/cadastro">
                Criar conta
            </Link>
        </>
    )
}