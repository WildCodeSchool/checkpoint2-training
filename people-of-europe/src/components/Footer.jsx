import React from "react";

const Footer = (props) => {
  return (
    <div>
      <h3>
        © {props.year} {props.authorName}
      </h3>
    </div>
  );
};

export default Footer;
