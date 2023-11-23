import Header from "../../components/Header/Header"
import fundoperfil from "../../assets/fundo_perfil.png"
import fotoperfil from "../../assets/foto_perfil.png"
import { Post, Biografia, ConteudoBio, EsteticaBanner, FotoPerfil, Fundo, ImagemFundo, TitBio } from "./styled"
import Barrinha from "../../components/Barrinha/Barrinha"


function usuarioTela() {
    return (
        <>
            <Header />
            <Fundo>
                <ImagemFundo src={fundoperfil} />
                <EsteticaBanner>
                    <FotoPerfil src={fotoperfil} />
                </EsteticaBanner>
            </Fundo>
            <Biografia>
                <TitBio>
                    biografia
                </TitBio>
                <ConteudoBio>
                    Isso aqui é uma biografia.
                </ConteudoBio>
            </Biografia>

            <Barrinha />
            <Post>
                aaaaaaaaaaaaa
            </Post>

        </>
    )
}

export default usuarioTela