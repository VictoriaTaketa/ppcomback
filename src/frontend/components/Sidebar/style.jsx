import styled from 'styled-components'

export const SidebarStyle = styled.div`
    width: 20vw;
    height: 100%;
    background-color: #8DE28B;
    /* border: 1px solid black; */
`

export const FotoPerfil = styled.img`
    border-radius: 50%;
    object-fit: cover;
    height: 20vh;
    margin-left: 5vw;
    padding-top: 1vh;
`

export const HashtagStyle = styled.p`
    font-size: 20px;
    margin-left: 7vh;   
    color: #343434; 
`

export const BotaoPerfil = styled.button`
    color: #343434;
    display: flex;
    align-items: center;
    padding-top: 2vh;
    padding-left: 1vw;
    margin-left: 2vw;
    p{
        padding-left: 1.5vw;
        font-weight: bold;
    }

    img{
        width: 4vw;
    }
`

export const BotaoSobre = styled.button`
    color: #343434;
    display: flex;
    align-items: center;
    padding-top: 2vh;
    padding-left: 1vw;
    margin-left: 2vw;

    p{
        padding-left: 1.5vw;
        font-weight: bold;
    }

    img{
        width: 4vw;
    }
`

export const BotaoSair = styled.button`
    color: #343434;
    width: 20vw;
    display: flex;
    align-items: center;
    margin-top: 82%;
    padding-left: 4vw;
    p{
        padding-left: 1vw;
        font-weight: bold;
    }
`