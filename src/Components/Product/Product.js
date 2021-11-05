import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from 'axios'
import img from '../../images/no-image-available.jpeg'
const Product = () => {

    const {id} = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        axios
          .get(`http://localhost:3050/products/${id}`)
          .then((response) => setData(response.data.product));
      }, []);

      console.log(data);
      console.log(id);

    return (
        <div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', height:'550px', width:"100%"}}>
            <div className="imagen m-5" >
            <img
          class="card-img-top w-100"
          src={img}
          alt="Card image cap"
        />
        </div>       
        <div className="descripcion w-75">  
            <h1 className="mt-5 mb-5">{data.name}</h1>
            <p className="sku d-flex justify-content-start mt-5">SKU: {data.sku}</p>
            <p className="sku d-flex justify-content-start mt-5">Descripcion: {data.description}</p>
            <h4 className="sku d-flex justify-content-start mt-5">Precio: ${data.price}</h4>
            <div className="d-flex justify-content-center">
            <button className="form-control w-50 mt-5 bg-success text-light">Comprar</button>
            </div>     
        </div>
            </div>
        </div>
    );
}

export default Product;
