import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      {" "}
      © {props.year} {props.authorName}
    </footer>
  );
}

export default Footer;
