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
        setProduct({ ...product, [name]: value });
        console.log(product);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        ProdService.addProduct(product).then(data => console.log(data))
                                         .catch(err=>console.error(err));
        setProduct(initialState);
        navigate('/Admin');

    }
    return (
<>
    <NavbarAdmin></NavbarAdmin>
    
    <div className='box'>
      <form onSubmit={handleSubmit}>

        <div>
          <label className='text'>Nom de l'article</label>
          <input id='name' name='name'type="text" placeholder="Titre de l'article" value={product.titre} onChange={handleChange} />
        </div>

        <div>
          <label className='text'>Auteur</label>
          <input id='name' name='name'type="text" placeholder="Nom de l'auteur" value={product.auteur} onChange={handleChange} />
        </div>

        <div>
          <label className='text'>Date</label>
          <input id='name' name='name'type="text" placeholder="JJ/MM/AAAA" value={product.date} onChange={handleChange} />
        </div>

        <div class="">
        <input type="submit" class="button" />
        </div>

      </form>
    </div>
 </>
    )
}

export default AddArticles