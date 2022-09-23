import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import { Cadastrar } from '../pages/cadastrar/Cadastrar';
import { Home } from '../pages/home/Home';

export const Rotas = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cadastrar' element={<Cadastrar/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}