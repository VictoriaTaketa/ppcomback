import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ConteudoStyled, Fundo, SobreStyled, TextoStyled } from "./styled";

function Sobre() {
    return (
        <>
            <Header />
            <Fundo>
            <Sidebar />
                <ConteudoStyled>
                    <SobreStyled>Sobre</SobreStyled>
                    <TextoStyled>Esse website tem o objetivo de reunir artigos acadêmicos e experiências de usuário. É o produto de uma pesquisa sobre musicoterapia e alzheimer, realizado pela aluna do Senac RS Victoria Lin Ikeda Taketa.</TextoStyled>
                </ConteudoStyled>
            </Fundo>
        </>
    )
}

export default Sobre