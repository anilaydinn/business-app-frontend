import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Alert } from "reactstrap";
import { getProduct, sendCommentToProduct } from "../../api";
import Dictaphone from "../Dictaphone";

export default function Product(props) {
  let { id } = useParams();

  const { username } = props;

  const [product, setProduct] = useState({
    comments: [{}],
  });
  const [comment, setComment] = useState("");

  const handleGetProduct = async () => {
    let response = await getProduct(id);

    setProduct(response);
  };

  const sendCommentToProductHandler = async () => {
    let response = await sendCommentToProduct(id, comment);

    setProduct(response);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            width="100%"
            height="560"
            src={`data:image/jpeg;base64,${product.image}`}
          />
        </div>
        <div className="col-md-6" style={{ height: "100%" }}>
          <div className="d-flex ">
            <h2 className="h2">{product.name}</h2>
            <div style={{ marginLeft: "auto" }}>{product.price}</div>
          </div>

          <div className="d-flex mt-4">
            <div style={{ fontWeight: "bold" }}>Description: </div>
            {product.description}
          </div>

          <Button className="btn btn-success mt-5 ml-auto">Buy</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {username && <Dictaphone setComment={setComment} />}
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-2">
          <Button
            onClick={() => sendCommentToProductHandler()}
            className="btn btn-success"
            style={{ marginLeft: "50px" }}
          >
            Send Comment
          </Button>
        </div>
      </div>
      <div className="row mt-5">
        {product.comments &&
          product.comments.map((comment, index) => (
            <Alert
              key={index}
              color={
                comment.pnModel && comment.pnModel.pn === "negative"
                  ? "danger"
                  : "success"
              }
            >
              {comment.text}
            </Alert>
          ))}
      </div>
    </div>
  );
}
