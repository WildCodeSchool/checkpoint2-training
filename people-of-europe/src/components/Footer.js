import React from "react";

function Footer({ year, authorName }) {
  return (
    <footer className="footer">
      © {year} {authorName}
    </footer>
  );
}

export default Footer;
