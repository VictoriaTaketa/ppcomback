import styled from 'styled-components'

export const SidebarStyle = styled.div`
    width: 20vw;
    height: 100%;
    background-color: rgba(141, 226, 139, 0.66);
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
    width: 20vw;
    display: flex;
    align-items: center;
    padding-top: 2vh;
    padding-left: 1vw;

    p{
        padding-left: 0.5vw;
    }

    img{
        width: 5vw;
    }
`

export const BotaoConfig = styled.button`
    color: #343434;
    display: flex;
    align-items: center;
    padding-top: 2vh;
    padding-left: 1vw;
`

export const BotaoSobre = styled.button`
    color: #343434;
    display: flex;
    align-items: center;
    padding-top: 2vh;
    padding-left: 1vw;

    p{
        padding-left: 1.5vw;
    }

    img{
        width: 5vw;
    }
`

export const BotaoSair = styled.button`
    color: #343434;
    width: 20vw;
    display: flex;
    align-items: center;
    padding-top: 17.2vh;
    padding-left: 4vw;

    p{
        padding-left: 1vw;
    }
`