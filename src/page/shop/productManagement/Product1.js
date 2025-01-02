import React from "react";
import Describe from "./describe/Describe";
import BasicInformation from "./addItem/infor/BasicInformation";
import PriceItem from "./priceItem/PriceItem";
import Tablelock from "./priceItem/Tablelock";
import ButtonSend from "./buttonSend/ButtonSend";
import ProductSpecifications from "./productSpecifications/ProductSpecifications";

const Product1 = () => {
  return (
    <div>
      <BasicInformation />
      <ProductSpecifications />
      <PriceItem />
      <Describe></Describe>
      <ButtonSend />
    </div>
  );
};

export default Product1;
