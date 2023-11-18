import { BotaoPerfil, BotaoSair, BotaoSobre, FotoPerfil, HashtagStyle, SidebarStyle } from "./style"
import fotoperfil from "../../assets/foto_perfil.png"
import iconeperfil from "../../assets/iconeperfil.png"
import { Divider } from '@chakra-ui/react'
import sobreicon from '../../assets/sobreicon.png'
import sairicone from '../../assets/sairicone.png'
import { useNavigate } from "react-router-dom"

function Sidebar() {

    const navigate = useNavigate()
    const GoToIndex = () => {
        navigate('/')
    }

    const GoToSobre = () =>{
        navigate('/sobre')
    }

    const GoToUsuario = () =>{
        navigate('/perfil')
    }

    return (
        <SidebarStyle>
            <FotoPerfil src={fotoperfil}></FotoPerfil>
            <HashtagStyle>@nomedeusuario</HashtagStyle>
            <Divider width='100%' orientation='horizontal' />
            <BotaoPerfil onClick={GoToUsuario}>
                <img src={iconeperfil} />
                <p>Perfil</p>
            </BotaoPerfil>

            <BotaoSobre onClick={GoToSobre}>
                <img src={sobreicon} />
                <p>Sobre</p>
            </BotaoSobre>

            <BotaoSair onClick={GoToIndex}>
                <img src={sairicone}/>
                <p>Sair</p>
            </BotaoSair>
        </SidebarStyle>
    )
}

export default Sidebar