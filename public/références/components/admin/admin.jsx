import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaPlusSquare, FaEdit, FaTrashAlt, FaHome } from "react-icons/fa";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs"
import { MdLogout } from "react-icons/md"
import ProductService from '../../services/product-service'; // importons le service
import AuthService from '../../services/auth-service';

const Admin = () => {
  const [products, setProducts] = useState([]);//déclaration de l'état initialisé à un tableau vide
  const navigate = useNavigate();
  useEffect(() => {
    ProductService.getProducts()
      .then(res => res.json())
      .then(data => setProducts(data))//lorsqu'il y a succès on met à jour l'état avec (data)
      .catch(err => console.error(err))//catch est exécuté lorsqu'il y a erreur
  }, []);
  const deleteProduct = id => {
    ProductService.removeProduct(id)
      .then(data => console.log(data))
      .catch(err => console.error(err));
    window.location.reload();
  }
  const handleClick = () =>{
    AuthService.logout();
    navigate('/login');
  }
  console.log(products);//logons l'état
  return (
    <>
      <h1 className='bg-secondary text-white text-center'>ADMINISTRATION  </h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home"><FaHome /></Link></li>
          <li className="breadcrumb-item active" aria-current="page">Admin</li>
        </ol>
        <div className='text-end'><button className='btn btn-primary' onClick = {handleClick}><MdLogout/></button></div>
      </nav>
      <h2>Liste des produits</h2>
      <div className="text-end">
        <Link className='btn btn-warning mb-1' to={`/add-product`}><FaPlusSquare /> Add</Link>
      </div>
      <table className='table table-striped table-bordered text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Produit</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Disponibilité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><img src={product.image} width={50} alt="" /></td>
              <td>
                {product.available ? <BsCheckCircleFill className='text-success fs-4' /> : <BsXCircleFill className='text-danger fs-4' />}
              </td>
              <td>
                <Link to={`/edit-product/${product.id}`}
                  className='btn btn-warning m-1' state={product}
                >
                  <FaEdit /> </Link>
                <Link to={`/admin/${product.id}`} className='btn btn-danger m-1'
                  onClick={() => {
                    if (window.confirm('Etes vous sûr de supprimer ce produit!')) {
                      deleteProduct(product.id);
                    }
                  }}
                > <FaTrashAlt /> </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  )
}

export default Admin