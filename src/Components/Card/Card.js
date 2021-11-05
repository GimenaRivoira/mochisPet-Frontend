import React, { useState, useEffect } from "react";
import img from "../../images/no-image-available.jpeg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const {id} = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3050/products")
      .then((response) => setData(response.data.products));
  }, []);

  return (
    <div className="container-fluid">
      <h3 className="d-flex justify-content-start mb-4">
        Nuestros productos más recientes
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          justifyItems: "center",
        }}
      >
        {data.slice(0, 8).map((product) => (
          <div class="card" style={{ width: "18rem", marginBottom: "50px" }}>
            <img
              class="card-img-top"
              src={img}
              alt="Card image cap"
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h4>{product.name}</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={`/products/${product.id}`}>
              <button className="btn btn-outline-success my-2 my-sm-0 m-2">
                ir al producto
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      

      <Link to="/products">
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="form-control w-25 bg-success text-light"
            style={{ fontWeight: "700", marginBottom:"5%"}}
          >
            Ver más
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
