import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { getProducts } from "../../api";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const getProductsHandler = async () => {
    let data = await getProducts();

    setProducts(data);
  };

  useEffect(() => {
    getProductsHandler();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-5">
            <Card>
              <CardImg
                top
                width="100%"
                height="300"
                src={`data:image/jpeg;base64,${product.image}`}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <div className="d-flex flex-row-reverse">
                  <Link to={`/product/${product.id}`}>
                    <Button>Detail</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
