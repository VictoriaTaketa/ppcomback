import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Input } from '@chakra-ui/react'
import { Fundo, NavegacaoStyled } from './styled'

function Home() {
    return (
        <>
            <Header />
            <Fundo>
                <Sidebar />
                <NavegacaoStyled>
                    <Input placeholder='Eai, o que tem pra hoje? :)' />
                </NavegacaoStyled>
            </Fundo>
         
            <footer />
            {/* <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='Phone number' />
            </InputGroup> */}
        </>
    )
};

export default Home