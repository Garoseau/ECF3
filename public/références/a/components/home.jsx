import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import ProductService from '../services/product-service';
import {BsCheckCircleFill, BsXCircleFill} from "react-icons/bs"

const Home = () => {
  const [products, setProducts] = useState([]);//déclaration de l'état initialisé à un tableau vide

  useEffect(() => {
    ProductService.getProducts()
      .then(res => res.json())
      .then(data => setProducts(data))//lorsqu'il y a succès on met à jour l'état avec (data)
      .catch(err => console.error(err))//catch est exécuté lorsqu'il y a erreur
  }, []);
  console.log(products)
  return (
    <>
    <div className='row col-12'>
    {products && products.map(product => (
        <div key={product.id} className="card col-4" style={{width:"18rem"}}>
          <img src={product.image} className="card-img-top img-fluid" width={50} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Nom: {product.name}</h5>
            <p className="card-text">En stock: {product.available? <BsCheckCircleFill className='text-success fs-4'/>:<BsXCircleFill className='text-danger fs-4'/>}</p>
            <Link to={`/product/${product.id}`} className="btn btn-primary" state={product}>Voir détails</Link>
          </div>
        </div>
      ))}
    </div>
      
    </>
  )}

export default Home