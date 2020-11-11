import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">{props.title}</h1>
    </div>
  );
}

export default Header;
