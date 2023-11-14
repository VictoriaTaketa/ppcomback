import styled from 'styled-components'
import fundo from '../../assets/fundo_login.png'

export const FundoStyled = styled.div`
    background-image: url(${fundo});
    height: 100vh ;
    width: 100vw;
    background-color: #FEFEFE;
`

//---------CONTAINER----------

export const ContainerLogin = styled.div`
    background-color: rgba(225, 229, 235, 0.51);
    margin-left: 50vh;
    margin-right: 50vh;
    height: 100vh;
`

export const ContainerStyle = styled.div`
    position: relative;
    width: 100px;
    margin-left: 5vw;
    margin-top: 10vh;
`

//---------INPUT------------

export const InputNome = styled.input`
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
//---------TEXTO-------------

export const TextoApres = styled.h1`
    color: #4CA97C;
    font-weight: bold;
    text-align: right;
    margin-left: 20vw;
    margin-right: 1vw;
    padding-top: 6vh;
    font-size: 50px;
`

export const NomeUsuario = styled.h2`
    color: #8DBCA5;
    font-size: 20px;
    margin-left: 5vw;
`

export const SenhaStyle = styled.h2`
    color: #8DBCA5;
    font-size: 20px;
    margin-left: 5vw;
    margin-top: 5vh;
`

//----------botao-----------------

export const BotaoStack1 = styled.button`
    position: absolute;
    width: 15vw;
    font-size: 20px;
    color: #8DBCA5;
`

export const BotaoStack2 = styled.button`
    position: absolute;
    margin-top: 45px;
    width: 15vw;
    font-size: 20px;
    color: #8DBCA5;
`

export const BotaoEntrar = styled.button`
    margin-left: 35vw;
    margin-top: 2vh;
    background-color: rgba(76, 169, 124, 0.3);
    border-radius: 20px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
`