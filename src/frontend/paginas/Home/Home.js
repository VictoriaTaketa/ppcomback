import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Input } from '@chakra-ui/react'
import { NavegacaoStyled } from './styled'

function Home() {
    return (
        <>
            <Header />
            <div>
            <Sidebar />
            </div>
            <NavegacaoStyled>
                <Input placeholder='Basic usage' />
            </NavegacaoStyled>
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