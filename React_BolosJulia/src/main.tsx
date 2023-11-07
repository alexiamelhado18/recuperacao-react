import ReactDOM from 'react-dom/client'

//estlização
import './index.css'

//componentes
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CadastroBolo from './pages/CadastroBolo'
import ListaBolo from './pages/ListaBolo'


//rotas
import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<CadastroBolo />} path='/cadastro/bolo' />
      <Route element={<ListaBolo />} path='/lista/bolo' />
    </Routes>
    <Footer/>
  </BrowserRouter>
)
