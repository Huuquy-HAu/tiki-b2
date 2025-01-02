import React from "react";

function FooterLink(props) {
  return (
    <a className="Footer-FooterLink" href={props.href}>
      {props.title}
    </a>
  );
}

export default FooterLink;
