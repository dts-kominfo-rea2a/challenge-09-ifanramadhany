import "./App.css";
import { Contact, Header } from "./components";
import React, {Children} from "react";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="contact">
        {/* card */}

        {Children.toArray(
          contacts.map((item) => (
            <Contact
              item={item}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
