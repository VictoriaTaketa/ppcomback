import { useNavigate } from "react-router-dom"
import { BotaoEntrar, BotaoStack1, BotaoStack2, ContainerLogin, ContainerStyle, FundoStyled, InputNome, InputSenha, NomeUsuario, SenhaStyle, TextoApres } from "./styled"



function Login() {
    const navigate = useNavigate()
        const GoingCadastro = () =>{
            navigate('/cadastro')
        }

        const GoingRecSenha = () =>{
            navigate('/recsenha')
        }

        const GoingHome = () =>{
            navigate('/home')
        }
    return (
        <FundoStyled>
            <ContainerLogin>
                <TextoApres>bem vindo (a) novamente :)</TextoApres>
                <NomeUsuario>Nome de usuário</NomeUsuario>
                <InputNome></InputNome>
                <SenhaStyle>Senha</SenhaStyle>
                <InputSenha></InputSenha>
                    <ContainerStyle>
                        <BotaoStack1 onClick={GoingRecSenha}>esqueci a senha</BotaoStack1>
                        <BotaoStack2 onClick={GoingCadastro}>novo por aqui?</BotaoStack2>
                    </ContainerStyle>
                <BotaoEntrar onClick={GoingHome}>Entrar</BotaoEntrar>
            </ContainerLogin>
        </FundoStyled>
    )
}

export default Login