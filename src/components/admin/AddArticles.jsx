import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductService from '../../services/product-service'

const AddArticles = () => {
    const initialState = { name: "", price: 0, image: "", available: false };
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
        ProductService.addProduct(product).then(data => console.log(data))
                                         .catch(err=>console.error(err));
        setProduct(initialState);
        navigate('/admin');

    }
    return (
<>
	<form onSubmit={handleSubmit}>                           
	</form> 
 </>
    )
}

export default AddArticles