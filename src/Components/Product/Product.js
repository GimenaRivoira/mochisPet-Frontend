import React from 'react';
import img from '../../images/pets.jpg'

const Product = () => {
    return (
        <div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', height:'550px'}}>
            <div className="imagen">
            <img
          class="card-img-top w-25"
          src={img}
          alt="Card image cap"
        />
        </div>
        <div className="descripcion w-75">
            <h1>Nombre del prod</h1>
            <p className="sku d-flex justify-content-start">SKU: dddd</p>
            <p className="sku d-flex justify-content-start">Descripcion: lorem impsub</p>
            <h4 className="sku d-flex justify-content-start">Precio: dddd</h4>
            <div className="d-flex justify-content-center">
            <input className="form-control w-50" type="submit" />
            </div>
        </div>
            </div>
        </div>
    );
}

export default Product;
