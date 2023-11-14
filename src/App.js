import { ChakraProvider } from '@chakra-ui/react'
import Rotas from './Rotas';

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