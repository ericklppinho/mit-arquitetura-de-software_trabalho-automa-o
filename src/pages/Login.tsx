import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erroEmail, setErroEmail] = useState('')
    const [erroSenha, setErroSenha] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Login'
    }, []);

    const handleChangeEmail = useCallback(
        async (event) => {
            setEmail(event.target.value);
            setErroEmail('');
        }, [setEmail, setErroEmail]);

    const handleChangeSenha = useCallback(
        async (event) => {
            setSenha(event.target.value)
            setErroSenha('');
        }, [setSenha, setErroSenha]);

    const handleEntrar = useCallback(
        async (event) => {
            if (email === '') {
                setErroEmail('Erro: E-mail inválido!')
            }

            if (senha === '') {
                setErroSenha('Erro: Senha inválida!')
            }

            if (email === 'teste@email.com' && senha === 'teste') {
                navigate('/dashboard')
            }
        }, [email, senha, navigate]);

    const handleLimpar = useCallback(
        async (event) => {

            setEmail('')
            setSenha('')

            setErroEmail('')
            setErroSenha('')
        }, [setEmail, setSenha, setErroEmail, setErroSenha]);

    return (
        <>
            <p>Login</p>
            <input name='email' placeholder='E-mail' value={email} onChange={handleChangeEmail} />
            {erroEmail && (<p style={{ color: 'red' }}>{erroEmail}</p>)}
            <br />
            <input name='senha' type='password' placeholder='Senha' value={senha} onChange={handleChangeSenha} />
            {erroSenha && (<p style={{ color: 'red' }}>{erroSenha}</p>)}
            <br />
            <br />
            <button type='button' onClick={handleEntrar}>Entrar</button>
            <button type='button' onClick={handleLimpar}>Limpar</button>
            <br />
            <Link to="/cadastro">
                Criar conta
            </Link>
        </>
    )
}