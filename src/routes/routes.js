import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import { Cadastrar } from '../pages/cadastrar/Cadastrar';
import { Editar } from '../pages/editar/Editar';
import { Home } from '../pages/home/Home';

export const Rotas = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cadastrar' element={<Cadastrar/>} />
                    <Route path='/editar/:id' element={<Editar/>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}