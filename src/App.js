import { ChakraProvider } from '@chakra-ui/react'
import Login from './paginas/Login/Login'
import Rotas from './Rotas/Rotas';

function App() {
  return (
    <>
      <ChakraProvider>
      <Rotas/>
      </ChakraProvider>
    </>
  );
}

export default App;

//https://blog.matheuscastiglioni.com.br/criando-containers-personalizaveis-em-react/