import '../../App.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProdService from '../../services/ProdServices';
import NavbarAdmin from './NavbarAdmin';

const AddArticles = () => {
    const initialState = { titre: "", auteur: "", date: "" };
    const [product, setProduct] = useState(initialState);
    const navigate = useNavigate();
		
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setProduct({ ...product, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ProdService.addProduct(product).then(data => console.log(data))
                                         .catch(err=>console.error(err));
        setProduct(initialState);
        navigate('/Admin');

    }
    return (
<>
    <NavbarAdmin></NavbarAdmin>
    
    <div className='boxForm'>
      <h2 className='gradient gValid anime'>Ajout d'un Article</h2>
      <form onSubmit={handleSubmit}>


        <input type="text" name='titre' placeholder="Titre de l'article" onChange={handleChange} value={product.titre} />
        <input type="text" name='auteur' placeholder="Nom de l'auteur" onChange={handleChange} value={product.auteur} />
        <input type="text" name='date' placeholder="JJ/MM/AAAA" onChange={handleChange} value={product.date} />
        <label htmlFor="file" className='text label gValid gradient anime'>Choisir une image</label>
        <input type="file" className='input-file' id='file' placeholder="votre image" onChange={handleChange} value={product.img} />

        <div class="">
        <input type="submit" class="button" value="envoyer" />
        </div>

      </form>


    </div>
 </>
    )
}

export default AddArticles