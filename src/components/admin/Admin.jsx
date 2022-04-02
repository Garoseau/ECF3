import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ProdService from '../../services/ProdServices'; // importons le service
import AuthService from '../../services/LogServices';
import NavbarAdmin from '../admin/NavbarAdmin'

const Admin = () => {
  const [products, setProducts] = useState([]);//déclaration de l'état initialisé à un tableau vide
  const navigate = useNavigate();
useEffect(() => {
    ProdService.getProducts()
      .then(res => res.json())
      .then(data => setProducts(data))//lorsqu'il y a succès on met à jour l'état avec (data)
      .catch(err => console.error(err))//catch est exécuté lorsqu'il y a erreur
  }, []);
const deleteProduct = id => {
    ProdService.removeProduct(id)
      .then(data => console.log(data))
      .catch(err => console.error(err));
    window.location.reload();
  }
const handleClick = () =>{
    AuthService.logout();
    navigate('/login');
  }
console.log(products);//logons l'état

return(
	<>
	<NavbarAdmin></NavbarAdmin>
		<div class='box'>

		<table>

			<h2>Products</h2>

			<tr>
			<th>ID</th>
			<th>Titre</th>
			<th>Auteur</th>
			<th>Date de création</th>
			<th>Date de publication</th>
			<th>Date de dernière modification</th>
			<th>Action</th>
			</tr>

			<tr key={products.id}>
			<th>{products.id}</th>
			<th>Titre</th>
			<th>Auteur</th>
			<th>Date de création</th>
			<th>Date de publication</th>
			<th>Date de dernière modification</th>
			<th>Action</th>
			</tr>

		</table>

		</div>
		</>
	)}

	
export default Admin;