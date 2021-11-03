import React from "react";
import img from '../../images/pets.jpg'

const Card = () => {
  return (
      <div className="container-fluid">
          <h3 className="d-flex justify-content-start">Nuestros productos más populares</h3>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
      <div class="card" style={{width: "18rem"}}>
        <img
          class="card-img-top"
          src={img}
          alt="Card image cap"
          style={{height:"200px"}}
        />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-outline-success my-2 my-sm-0 m-2">ir al producto</button>
        </div>
      </div>

      <div class="card" style={{width: "18rem"}}>
        <img
          class="card-img-top"
          src={img}
          alt="Card image cap"
          style={{height:"200px"}}
        />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-outline-success my-2 my-sm-0 m-2">ir al producto</button>
        </div>
      </div>
      
    </div>

</div>
  );
};

export default Card;
