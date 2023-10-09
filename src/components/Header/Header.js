import { MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import IconeMenu from "../../assets/icone_abrir_menu.png"
import { ContStyle, HeaderStyle, ImgStyle } from "./styled"

function Header() {
    return (
        <>
            <HeaderStyle>
                <ContStyle>
                    <ImgStyle src={logo} />
                    <h1 style={{ marginLeft: '5px' }}>talk about it</h1>
                    {/* <Menu>
                        <MenuButton
                            as={IconeMenu}
                            aria-label='Options'
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                                Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu> */}
                </ContStyle>
            </HeaderStyle>
        </>
    )
}

export default Header