import { MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import IconeMenu from "../../assets/icone_abrir_menu.png"
import { ContStyle, HeaderStyle, ImgStyle } from "./styled"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
        const GoingHome = () =>{
            navigate('/home')
        }

    return (
        <>
            <HeaderStyle>
                <button onClick={GoingHome}>
                <ContStyle>
                    <ImgStyle src={logo} />
                    <h1 style={{ marginLeft: '5px' }}>talk about it</h1>
                </ContStyle>
                </button>
            </HeaderStyle>
        </>
    )
}

export default Header