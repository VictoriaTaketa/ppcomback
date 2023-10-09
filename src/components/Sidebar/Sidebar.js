import { BotaoConfig, BotaoPerfil, BotaoSair, BotaoSobre, FotoPerfil, HashtagStyle, SidebarStyle } from "./style"
import fotoperfil from "../../assets/foto_perfil.png"
import iconeperfil from "../../assets/iconeperfil.png"
import { Divider } from '@chakra-ui/react'
import configicon from '../../assets/configicon.png'
import sobreicon from '../../assets/sobreicon.png'
import sairicone from '../../assets/sairicone.png'
import { useNavigate } from "react-router-dom"

function Sidebar() {

    const navigate = useNavigate()
    const GoToIndex = () => {
        navigate('/')
    }

    return (
        <SidebarStyle>
            <FotoPerfil src={fotoperfil}></FotoPerfil>
            <HashtagStyle>@nomedeusuario</HashtagStyle>
            <Divider width='100%' orientation='horizontal' />
            <BotaoPerfil>
                <img src={iconeperfil} />
                <p>Perfil</p>
            </BotaoPerfil>

            <BotaoConfig>
                <img src={configicon} />
                <p>Configurações</p>
            </BotaoConfig>

            <BotaoSobre>
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