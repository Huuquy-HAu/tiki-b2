import React from "react";

function FooterReDetal(props) {
  return (
    <div className="Footer-FooterReDetal">
      <h4>{props.title}</h4>
      {props.children}
    </div>
  );
}

export default FooterReDetal;
