import styled from 'styled-components'
import fundo from '../../assets/fundo_RecSenha.png'

export const FundoStyle = styled.div`
    background-image: url(${fundo});
    height: 100vh ;
    width: 100vw;
    background-color: #FEFEFE
`

//------container----------

export const ContainerStyle = styled.div`
    background-color: rgba(225, 229, 235, 0.51);
    margin-left: 50vh;
    margin-right: 50vh;
    height: 100vh;
`

//-------------textos-----------------
export const TextoApres = styled.h1`
    color: #4CA97C;
    font-size: 45px;
    justify-content: flex;
    margin-left: 6vw;
    padding-top: 5vh;
`

export const Texto1Style = styled.h2`
    font-size: 40px;
    color: #8DBCA5;
    text-align: right;
    margin-top: 5vh;
    margin-left: 20vw;
    padding-right: 3vw;
`

export const EmailStyle = styled. h2`
    font-size: 30px;
    color: #8DBCA5;
    margin-left: 2vw;
`

export const InformeEmail = styled.h2`
    margin-left: 5vw;
    margin-top: 2vh;
    color: #8DBCA5;
    font-size: 20px;
`

export const InformeUsuario = styled.h2`
    margin-left: 5vw;
    color: #8DBCA5;
    font-size: 20px;
`

//--------------butao----------------

export const BotaoPgPrincipal = styled.button`
    background-color: rgba(76, 169, 124, 0.3);
    justify-content: flex;
    margin-left: 40%;
    margin-top: 90px;
    padding: 10px;
    border-radius: 5px;
`