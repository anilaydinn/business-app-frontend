import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

export default function ProductList() {
  const classes = useStyles();
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
            <Link className={classes.link} to={`/product/${product.id}`}>
              <Card style={{ height: "100%" }}>
                <CardImg
                  top
                  width="100%"
                  height="300"
                  src={`data:image/jpeg;base64,${product.image}`}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
