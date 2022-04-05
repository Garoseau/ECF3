import React, { useState, useEffect } from 'react';
import ProdService from '../../services/ProdServices'; // importons le service
import NavbarAdmin from '../admin/NavbarAdmin'
import {BrowserRouter as Link} from "react-router-dom";
import { Outlet } from "react-router-dom";

const DeleteArticles = () => {
	
  const [products, setProducts] = useState([]);//déclaration de l'état initialisé à un tableau vide

	useEffect(() => {
    ProdService.getProducts() 
      .then(res => res.json(res))
      .then(data => setProducts(data))//lorsqu'il y a succès on met à jour l'état avec (data)
      .catch(err => console.error(err))//catch est exécuté lorsqu'il y a erreur
  }, []);

const deleteProduct = id => {
    ProdService.removeProduct(id)
      .then(data => console.log(data))
      .catch(err => console.error(err));
    window.location.reload();
  }

console.log(products);//logons l'état

return(
	<>
		<NavbarAdmin></NavbarAdmin>
		<div className='boxForm'>
			<h2 className='gradient gError anime'>Supprimer un Article</h2>
			<table className='center'>

					<tr className='gradient gError anime'>
					<Outlet/>
						<th>Titre</th>
						<th>Auteur</th>
						<th>Date de création</th>
					</tr>
	
					{products && products.map(product => (
					<tr key={product.id} className="">
						<th className="">{product.titre}</th>
						<th className="">{product.auteur}</th>
						<th className="">{product.date}</th>
						<th to={`/DeleteArticles/${product.id}`} className='gError gradient anime'
									onClick={() => {
										if (window.confirm('Etes vous sur ?')) {
											deleteProduct(product.id);
										}
									}}>Supprimer</th>
							
					</tr>
					))}

			</table>

		</div>
	</>
	)}

	
export default DeleteArticles;