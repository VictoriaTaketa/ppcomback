import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./frontend/paginas/Cadastro/Cadastro";
import Index from "./frontend/paginas/Index/Index";
import Login from "./frontend/paginas/Login/Login";
import RecSenha from "./frontend/paginas/RecSenha/RecSenha"
import Erro from "./frontend/paginas/Erro/Erro"
import Home from "./frontend/paginas/Home/Home"
import Selecao from "./frontend/components/Selecao/Selecao.js"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Index/>}/>
                <Route path="/login" element ={<Login/>}/>
                <Route path="/cadastro" element ={<Cadastro/>}/>
                <Route path="/recsenha" element ={<RecSenha/>}/>
                <Route path="/home" element ={<Home/>}/>
                <Route path="/selecao" element ={<Selecao/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas