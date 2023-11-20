import Header from "../../components/Header/Header"
import fundoperfil from "../../assets/fundo_perfil.png"
import fotoperfil from "../../assets/foto_perfil.png"
import { BarrinhaUsuario, EsteticaBanner, FotoPerfil, Fundo, ImagemFundo } from "./styled"
import Biografia from "../../components/Biografia/Biografia"


function usuarioTela() {
    return (
        <>
            <Header />
            <Fundo>
                <ImagemFundo src={fundoperfil} />
            <EsteticaBanner>
                <FotoPerfil src={fotoperfil}/>
            </EsteticaBanner>
                <BarrinhaUsuario/>
                <Biografia/>
            </Fundo>
            
        </>
    )
}

export default usuarioTela