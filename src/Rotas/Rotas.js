import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../paginas/Cadastro/Cadastro";
import Index from "../paginas/Index/Index";
import Login from "../paginas/Login/Login";
import RecSenha from "../paginas/RecSenha/RecSenha"
import Erro from "../paginas/Erro/Erro"
import Home from "../paginas/Home/Home"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Index/>}/>
                <Route path="login" element ={<Login/>}/>
                <Route path="cadastro" element ={<Cadastro/>}/>
                <Route path="recsenha" element ={<RecSenha/>}/>
                <Route path="home" element ={<Home/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas