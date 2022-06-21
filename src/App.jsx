import "./App.css";
import { Contact, Header } from "./components";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="contact">
        {/* card */}
        <Contact item={contacts[0]} />
        <Contact item={contacts[1]} />
        <Contact item={contacts[2]} />
        <Contact item={contacts[3]} />
        <Contact item={contacts[4]} />
        <Contact item={contacts[5]} />
      </div>
    </div>
  );
};

export default App;
