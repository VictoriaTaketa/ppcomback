import Header from "../../components/Header/Header"
import fundoperfil from "../../assets/fundo_perfil.png"
import fotoperfil from "../../assets/foto_perfil.png"
import { EsteticaStyled, FotoPerfil, Fundo, ImagemFundo } from "./styled"


function usuarioTela() {
    return (
        <>
            <Header />
            <Fundo>
            <EsteticaStyled>
                <ImagemFundo src={fundoperfil} />
                <FotoPerfil src={fotoperfil}/>
            </EsteticaStyled>
            </Fundo>
            
        </>
    )
}

export default usuarioTela