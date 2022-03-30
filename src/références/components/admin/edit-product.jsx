import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {FaThList} from 'react-icons/fa'
import ProductService from '../../services/product-service'

const EditProduct = () => {
    const initialState = { name: "", price: 0, image: "", available: false };
    const [product, setProduct] = useState(initialState);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setProduct(location.state);
    }, [location.state]);
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setProduct({ ...product, [name]: value });
        console.log(product);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        const modifProd = { name: product.name, price: product.price, image: product.image, available: product.available }
        ProductService.updateProduct(product.id, modifProd).then(data => console.log(data))
            .catch(err => console.error(err));
        setProduct(initialState);
        navigate('/admin');

    }
    console.log(location.state);
    return (
        <>
            <h1 className='bg-secondary text-white text-center'>ADMINISTRATION</h1>
      

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" style={{textDecoration:'none'}}><Link to="/admin"><FaThList/></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edition</li>
                </ol>
            </nav>

      
            <div className="row mt-5">
                <div className="col-4 offset-4">
                    <div className="card-header">
                        <h3>Edition du produit  N°00{location.state.id}</h3>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Produit</label>
                                    <input type="text" id='name' name='name' className="form-control" placeholder='Votre nom' onChange={handleChange}
                                        value={product.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Prix</label>
                                    <input type="number" id='price' name='price' className="form-control" placeholder='Votre prix' onChange={handleChange}
                                        value={product.price} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image</label>
                                    <input type="url" id='image' name='image' className="form-control" onChange={handleChange}
                                        value={product.image} placeholder='http:// ...' />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" id='available' name="available" className="" placeholder='La disponibilité' onChange={handleChange}
                                        checked={product.available} />
                                    <label className="form-check-label" htmlFor="available"> Disponibilité</label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-warning col-12">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct