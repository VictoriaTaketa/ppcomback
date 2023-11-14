import { FooterStyle, FotoFooterStyle } from "./styled"
import footerlogo from "../../assets/footerlogo.png"

function Footer() {
    return (
        <>
            <FooterStyle style={{ backgroundColor: '#7CD77A' }}>
                <FotoFooterStyle src={footerlogo} />
            </FooterStyle>
        </>
    )
}

export default Footer