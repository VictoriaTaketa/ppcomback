import styled from 'styled-components'
import fundo from '../../assets/fundo_cadastro.png'

export const FundoStyled = styled.div`
    color: black;
    background-image: url(${fundo});
`
export const DivCadastro = styled.div`
    background-color: rgba(225, 229, 235, 0.51);
    margin-left: 50vh;
    margin-right: 50vh;
    height: 100vh;
`

//----------------TEXTOS-----------

export const TextoApres = styled.h1`
    color: #4CA97C;
    font-weight: bold;
    text-align: right;
    margin-left: 25vw;
    margin-right: 1vw;
    padding-top: 6vh;
    font-size: 50px;
`

export const TextoAviso = styled.h3`
    padding-left: 5vw;
    font-size: 12px;
    color: #7B7B7B;
`

export const NomeInput = styled.h2`
    color: #8DBCA5;
    font-size: 20px;
    margin-left: 5vw;
`

export const EmailUsuario = styled.h2`
    color: #8dbca5;
    font-size: 20px;
    margin-left: 5vw;
    margin-top: 5vh;
`

export const SenhaUsuario = styled.h2`
    color: #8dbca5;
    font-size: 20px;
    margin-left: 5vw;
    margin-top: 5vh;
`
// --------INPUTS--------------

export const InputUsuario = styled.input`
    padding-right: 28vw;
    margin-left: 5vw;
    height: 6vh;
    outline-color: #E2E2E2;
`

export const InputEmail = styled.input`
    padding-right: 28vw;
    margin-left: 5vw;
    height: 6vh;
    outline-color: #E2E2E2;
`

export const InputSenha = styled.input`
    padding-right: 28vw;
    margin-left: 5vw;
    height: 6vh;
    outline-color: #E2E2E2;
`

//-----BUTAO------

export const BotaoCadastrar = styled.button`
    margin-left: 8vw;
    margin-top: 10vh;
    padding: 8px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 20px;
    border-radius: 15px;
    background-color: rgba(76, 169, 124, 30%)
`

export const BotaoLogin = styled.button`
    margin-top: 10vh;
    margin-left: 16vw;
    margin-top: 10vh;
    font-size: 20px;
    color: #8DBCA5;
`