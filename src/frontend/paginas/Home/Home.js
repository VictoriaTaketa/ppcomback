import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Card1Styled, Comentario1Styled, ComentarStyled, Fundo, InputStyled } from './styled'
import seta from "../../assets/setacomentar.png"

function Home() {
    return (
        <>
            <Header />
            <Fundo>
              
                    <Sidebar />
                    <Comentario1Styled>

                        <ComentarStyled>
                            <img src={seta} />
                            <InputStyled placeholder='Eai, o que tem pra hoje? :)' />
                        </ComentarStyled>

                        <Card1Styled>
                            <img src />
                            oi
                        </Card1Styled>

                    </Comentario1Styled>
                
            </Fundo>
            <footer />


        </>
    )
};

export default Home