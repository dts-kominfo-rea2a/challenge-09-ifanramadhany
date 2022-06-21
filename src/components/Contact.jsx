// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({item}) => {
  return (
    <div className="card">
      <div className="left-content">
        <img src={item.photo} alt="" />
      </div>
      <div className="right-content">
        <p style={{ fontSize: "3vw" }}>{item.name}</p>
        <p style={{ fontSize: "1vw" }}>{item.phone}</p>
        <p style={{ fontSize: "1vw" }}>{item.email}</p>
      </div>
    </div>
  );
};

export default Contact;
