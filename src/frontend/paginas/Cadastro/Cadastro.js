import { DivCadastro, FundoStyled, InputUsuario, TextoApres, NomeInput, EmailUsuario, InputEmail, InputSenha, SenhaUsuario, TextoAviso, BotaoCadastrar, BotaoLogin } from './styled'
import { Stack } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'

function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    const saveUserinfoLocalStorage = (email, nome) => {
        localStorage.setItem('email', email)
        localStorage.setItem('nome', nome)

        console.log(nome)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const credentials = { senha, email, nome }
        axios.post('http://localhost:5000/api/user/create', credentials, {

            // headers: {
            //     'Content-type': 'application/json',
            // }
        })
        
        .then(response => {
            alert(response.data.message)
            const email = response.data.data[0].email;
            const nome = response.data.data[0].nome
            
            saveUserinfoLocalStorage(email, nome)
            navigate('/')
                // navigate('/principal')
            })
            .catch(error => console.log(error))
    }



    const navigate = useNavigate()
    const GoingLogin = () => {
        navigate('/login')
    }

    const GoToIndex = () => {
        navigate('/')
    }

    return (
        <>
            <FundoStyled>
                <DivCadastro>
                    <TextoApres>primeira vez aqui?</TextoApres>
                    <form onSubmit={handleSubmit}>
                        <NomeInput>Nome de usuário</NomeInput>
                        <InputUsuario type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
                        <EmailUsuario>Email</EmailUsuario>
                        <InputEmail type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <SenhaUsuario>Senha</SenhaUsuario>
                        <InputSenha
                            maxLength={8}
                            minLength={4}
                            type='password' value={senha} onChange={(e) => setSenha(e.target.value)}
                        />
                        <TextoAviso>
                            requisitos: mínimo 8 caracteres, inclua números para sua segurança :)
                        </TextoAviso>
                        <Stack direction='row' align='center'>
                            <BotaoCadastrar  type="submit">cadastrar</BotaoCadastrar>
                            <BotaoLogin onClick={GoingLogin}>já tenho conta!</BotaoLogin>
                        </Stack>
                    </form>
                </DivCadastro>
            </FundoStyled>
        </>
    )
}

export default Cadastro