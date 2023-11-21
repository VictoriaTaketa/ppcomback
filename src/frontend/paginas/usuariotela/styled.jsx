import styled from 'styled-components'

//---------------TEXTOS----------------

export const TitBio = styled.p`
    font-weight: bold;
    color: rgba(101, 121, 112, 1);
    margin-left: 10px;
    margin-top: 5px;
    display: block; 
`

export const ConteudoBio = styled.p`
    text-align: left;
    display: flex;
    flex-direction: column;
    display: block;
`

//----------------DIVS-----------------

export const Fundo = styled.div`
    display: flex; 
    justify-content: center;
    gap: 10px; 
`

export const EsteticaBanner = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
`

export const Biografia = styled.div`
    background-color: rgba(226, 238, 255, 0.55);
    display: block;
    /* flex-direction: column; */
    position: absolute;
    height: 20vw;
    width: 30vw;;
    margin-top: 10vw;
    margin-left: 5vw;
    border-radius: 5px;
`

//------------IMAGENS---------------

export const ImagemFundo = styled.img`
    display: flex;
    position: relative;
`

export const FotoPerfil = styled.img`
    display: flex;
    width: 200px;
    margin-right: 70vw;
    margin-top: 30vh;
    /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25); */
`
