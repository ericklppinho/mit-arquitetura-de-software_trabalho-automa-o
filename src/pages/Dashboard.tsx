import { useEffect } from 'react';

export default function Dashboard() {

    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    return (
        <>
            <p>Dashboard</p>
        </>
    )
}