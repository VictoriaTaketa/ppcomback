import { BotaoPgPrincipal, ContainerStyle, EmailStyle, FundoStyle, InformeEmail, InformeUsuario, Texto1Style, TextoApres } from "./styled"
import { useNavigate } from "react-router-dom"

function RecSenha() {
    const navigate = useNavigate()
        const GoingIndex = () =>{
            navigate('/')
        }
    return(
        <>
        <FundoStyle>
            <ContainerStyle>
                <TextoApres style={{ fontWeight: 'bold' }}>recuperação de senha</TextoApres>
                <Texto1Style>nos contacte para a recuperação de senha</Texto1Style>
                <EmailStyle style={{ fontWeight: 'bold'}}>talkaboutitcontato@gmail.com</EmailStyle>
                <InformeEmail>informe email usado na conta</InformeEmail>
                <InformeUsuario>informe nome de usuário usado na conta</InformeUsuario>
                <BotaoPgPrincipal onClick={GoingIndex}>página principal</BotaoPgPrincipal>
            </ContainerStyle>
        </FundoStyle>
        </>
    )
}

export default RecSenha