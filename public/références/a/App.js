import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Admin from './components/admin/admin';
import Home from './components/home';
import Nav from './components/nav';
import NotFound from './components/not-found';
import AddProduct from './components/admin/add-product';
import EditProduct from './components/admin/edit-product';
import Login from './components/admin/login';
import PrivateRoute from './components/admin/private-route';
import ProductItem from './components/product-item';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route path='' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='product/:id' element={<ProductItem/>} />
          </Route>
          <Route path="login" element={<Login/>} />
          <Route path="admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="add-product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          <Route path="admin/:id" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="edit-product/:id" element = {<PrivateRoute><EditProduct/></PrivateRoute>  } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
