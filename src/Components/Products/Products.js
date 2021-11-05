import React, {useState, useEffect} from 'react';
import img from "../../images/no-image-available.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";



const Products = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(8)

    useEffect(() => {
      axios
        .get("http://localhost:3050/products")
        .then((response) => setData(response.data.products));
    }, []);

    const showMoreItems = () => {
        setShow(prev => prev + 4)
    }

   
    return (
        <div className="container-fluid">
        <h3 className="d-flex justify-content-center align-items-center mb-5 mt-5" style={{backgroundColor:"#99A799", height:"2.5em", paddingLeft:"15px"}} >
          Todos nuestros productos
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            justifyItems: "center",
          }}
        >
          {data.slice(0, show).map((product) => (
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
        
          <div className="d-flex justify-content-center mb-5">
            <button
              type="submit"
              className="form-control w-25 bg-success text-light"
              style={{ fontWeight: "700" }}
              onClick={showMoreItems}
            >
              Ver más
            </button>
          </div>
       
      </div>
    );
}

export default Products;
