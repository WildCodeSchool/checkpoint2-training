import React from "react";

const Footer = (props) => {
  const { year, authorName } = props;
  return (
    <p>
      © {year} {authorName}
    </p>
  );
};

export default Footer;
