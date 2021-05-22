import React from "react";
import { FormGroup, Label, Input, Form } from "reactstrap";

export default function Product() {
  return (
    <div class="container mt-5">
      <div class="card">
        <div class="container-fliud">
          <div class="wrapper row">
            <div class="preview col-md-6">
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1">
                  <img src="http://placekitten.com/400/252" />
                </div>
              </div>
            </div>
            <div class="details col-md-6">
              <p class="product-description">
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
              <h4 class="price">
                current price: <span>$180</span>
              </h4>
              <p class="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
              <h5 class="sizes">
                sizes:
                <span class="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span class="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span class="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span class="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <div class="action">
                <button class="btn btn-success" type="button">
                  Buy
                </button>
              </div>
            </div>
            <Form className="mt-3">
              <FormGroup>
                <Label for="exampleText">Write Your Comment</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
