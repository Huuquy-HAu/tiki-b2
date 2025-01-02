import React from "react";
import { Product } from "../data/product";

function product(props) {
  const listproduct = Product.product.productDetailId;
  return (
    <div>
      {listproduct.map(function (item) {
        console.log(item.option[1]);
        return (
          <div className="Pproduct">
            <div className="Pcolor">
              <div>{item.option[0].value}</div>
            </div>
            <div className="Psize">
              <div>{item.option[1].value} </div>
            </div>
            <div className="Pprice">
              <div>{item.price} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default product;
