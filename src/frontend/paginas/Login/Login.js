import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BotaoEntrar, BotaoStack1, BotaoStack2, ContainerLogin, ContainerStyle, FundoStyled, InputNome, InputSenha, NomeUsuario, SenhaStyle, TextoApres } from "./styled"
import axios from "axios"

function Login() {

    const [senha, setSenha] = useState('')
    const [name, setName] = useState('')

    const saveUserinfoLocalStorage = (id, nome) => {
        localStorage.setItem('id', id)
        localStorage.setItem('nome', nome)

        console.log(nome)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const credentials = {senha, name }
        axios.post('http://localhost:5000/api/auth/login', credentials, {

            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(response => {
                alert(response.data.message)
                const id = response.data.data[0].id;
                const nome = response.data.data[0].nome

                saveUserinfoLocalStorage(id, nome)
                navigate('/home')
            })
            .catch(error => console.log(error))
    }
    const navigate = useNavigate()
    const GoingCadastro = () => {
        navigate('/cadastro')
    }

    const GoingRecSenha = () => {
        navigate('/recsenha')
    }

    const GoingHome = () => {
        navigate('/home')
    }
    return (
        <FundoStyled>
            <ContainerLogin>
                <TextoApres>bem vindo (a) novamente :)</TextoApres>
                <NomeUsuario>Nome de usuário</NomeUsuario>
                <form onSubmit={handleSubmit}>
                <InputNome 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}>
                </InputNome>
                <SenhaStyle>Senha</SenhaStyle>
                <InputSenha 
                    value={senha} 
                    onChange={(e)=>setSenha(e.target.value)}>
                </InputSenha>
                <ContainerStyle>
                    <BotaoStack1 onClick={GoingRecSenha}>esqueci a senha</BotaoStack1>
                    <BotaoStack2 onClick={GoingCadastro}>novo por aqui?</BotaoStack2>
                </ContainerStyle>
                <BotaoEntrar type="submit">Entrar</BotaoEntrar>
                </form>
            </ContainerLogin>
        </FundoStyled>
    )
}

export default Login