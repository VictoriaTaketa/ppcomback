import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./frontend/paginas/Cadastro/Cadastro";
import Index from "./frontend/paginas/Index/Index";
import Login from "./frontend/paginas/Login/Login";
import RecSenha from "./frontend/paginas/RecSenha/RecSenha"
import Erro from "./frontend/paginas/Erro/Erro"
import Home from "./frontend/paginas/Home/Home"
import Selecao from "./frontend/components/Selecao/Selecao.js"
import Sobre from "./frontend/paginas/Sobre/Sobre"
import Perfil from "./frontend/paginas/UsuarioTela/usuarioTela";

function Rotas(){
    return(
        <>
        <Router>
            <Routes>
                <Route index element ={<Index/>}/>
                <Route path="/login" element ={<Login/>}/>
                <Route path="/cadastro" element ={<Cadastro/>}/>
                <Route path="/recsenha" element ={<RecSenha/>}/>
                <Route path="/home" element ={<Home/>}/>
                <Route path="/selecao" element ={<Selecao/>}/>
                <Route path="/sobre" element ={<Sobre/>}/>
                <Route path="/perfil" element ={<Perfil/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default Rotas