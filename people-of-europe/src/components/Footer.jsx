import React from 'react';

function Footer(props) {
  return (
    <footer>
      <p>© {props.year} {props.authorName}</p>
    </footer>
  )
}

export default Footer;
