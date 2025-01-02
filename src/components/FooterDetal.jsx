import React from "react";

function FooterDetal(props) {
  return (
    <p className="Footer-FooterDetal">
      <span>{props.title1}</span>
      <a href={props.href}>{props.title2}</a>
      <p className="Footer-FooterDetal-p">{props.title3}</p>
    </p>
  );
}

export default FooterDetal;
