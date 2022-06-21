// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 style={{ fontSize: "2.5vw", marginBottom: 20 }}>
        Call a Friend
      </h1>
      <h4 style={{ color: "gray", fontSize: "1.5vw"}}>
        your friendly contact app
      </h4>
    </div>
  );
};

export default Header;
