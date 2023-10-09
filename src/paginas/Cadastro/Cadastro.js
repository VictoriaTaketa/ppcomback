import { DivCadastro, FundoStyled, InputUsuario, TextoApres, NomeInput, EmailUsuario, InputEmail, InputSenha, SenhaUsuario, TextoAviso, BotaoCadastrar, BotaoLogin } from './styled'
import { Stack } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

function Cadastro() {
    const navigate = useNavigate()
        const GoingLogin = () =>{
            navigate('/login')
        }

        const GoToIndex = () =>{
            navigate('/')
        }

    return (
        <>
            <FundoStyled>
                <DivCadastro>
                    <TextoApres>primeira vez aqui?</TextoApres>
                    <NomeInput>Nome de usuário</NomeInput>
                    <InputUsuario />
                    <EmailUsuario>Email</EmailUsuario>
                    <InputEmail />
                    <SenhaUsuario>Senha</SenhaUsuario>
                    <InputSenha/>
                    <TextoAviso>
                        requisitos: mínimo 8 caracteres, inclua números para sua segurança :)
                    </TextoAviso>
                    <Stack direction='row' align='center'>
                    <BotaoCadastrar onClick={GoToIndex}>cadastrar</BotaoCadastrar>
                    <BotaoLogin onClick={GoingLogin}>já tenho conta!</BotaoLogin>
                    </Stack>
                </DivCadastro>
            </FundoStyled>
        </>
    )
}

export default Cadastro