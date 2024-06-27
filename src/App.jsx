import style from './App.module.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import NotFound from './pages/notFound/NotFound'
import Products from './pages/products/Products';
function App() {
  return(
    <div className={style.app}>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App
