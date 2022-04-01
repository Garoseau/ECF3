import { useLocation } from "react-router-dom";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const ProductItem = ()=>{
    const location = useLocation()
    console.log(location);
    return(
        <>
            <div className="card text-center" style={{width:"18rem"}}>
            <img src={location.state.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Produit</h5>
                <p className="card-text">{location.state.name}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Prix{location.state.price}</li>
                <li className="list-group-item">En stock {location.state.available? <BsCheckCircleFill className='text-success fs-4'/>:<BsXCircleFill className='text-danger fs-4'/>}</li>
            </ul>
            </div>
        </>
    )
}

export default ProductItem;