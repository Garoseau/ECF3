import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProdService from '../../services/ProdServices';
import NavbarAdmin from './NavbarAdmin';

const EditArticles = () => {
	const initialState = { titre: "", auteur: "", date: "", img: "" };
	const [product, setProduct] = useState(initialState);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setProduct(location.state);
    }, [location.state]);

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setProduct({ ...product,  [name]: value });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);

        const modifProd = { titre: product.titre, auteur: product.auteur, date: product.date, img: product.img }
        ProdService.updateProduct(product.id, modifProd).then(data => console.log(data))
            																						.catch(err => console.error(err));
        setProduct(initialState);
        navigate('/Admin');
    }
    console.log(location.state);

		return (    
	
			<>
			<NavbarAdmin></NavbarAdmin>
    <div className='boxForm'>
      <h2 className='gradient gGold anime'>Modification de l'article : {location.state.titre}</h2>
      <form onSubmit={handleSubmit}>


        <input type="text" id='titre' name='titre' placeholder={product.titre} onChange={handleChange} value={product.titre} />
        <input type="text" id='auteur' name='auteur' placeholder={product.auteur} onChange={handleChange}value={product.auteur}  />
        <input type="text" id='date' name='date' placeholder={product.date} onChange={handleChange}value={product.date}  />
        <input type="text" className='' id='file' placeholder={product.img} onChange={handleChange} value={product.img} />
        <div class="">
        <input type="submit" class="button" value="envoyer" />
        </div>

      </form>


    </div>
		</>
		)
	}
	
	export default EditArticles