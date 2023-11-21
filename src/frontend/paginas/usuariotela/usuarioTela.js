import Header from "../../components/Header/Header"
import fundoperfil from "../../assets/fundo_perfil.png"
import fotoperfil from "../../assets/foto_perfil.png"
import { Biografia, ConteudoBio, EsteticaBanner, FotoPerfil, Fundo, ImagemFundo, TitBio } from "./styled"
import Barrinha from "../../components/Barrinha/Barrinha"


function usuarioTela() {
    return (
        <>
            <Header />
            <Fundo>
                <ImagemFundo src={fundoperfil} />
            <EsteticaBanner>
                <FotoPerfil src={fotoperfil}/>
            </EsteticaBanner>
            </Fundo>
                <Biografia>
                    <TitBio>
                        biografia
                    </TitBio>
                    <ConteudoBio>
                        Phasellus sagittiies at. Suspendisse at aliquet odio. Nullam maximus a elit vitae scelerisque. In varius mi eu velit euismod, a scelerisque neque laoreet. Nullam hendrerit cursus risus sit amet fringilla. Cras dapibus quam a odio tempor efficitur. In porta, orci et sodales mollis, nunc enim posuere diam, consectetur fermentum dui lacus non massa. Pellentesque tempor euismod arcu sit amet porta. Duis faucibus est non ante ullamcorper, iaculis condimentum metus ullamcorper.
                    </ConteudoBio>
                </Biografia>
                <Barrinha/>
            
        </>
    )
}

export default usuarioTela