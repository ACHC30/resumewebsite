import "./App.css";
import React, { useState } from "react";
import Popup from "./Components/Popup";
import Header from "./Public Page/Header";
import Footer from "./Public Page/Footer";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenPopup}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />

      <Header />
      <h1 style={{ marginTop: "10%", margin: "5%" }}>
        This is a personal project website that i have created in order to keep
        my coding skills sharp. besides that i would also make this website for
        my recriuters to see my coding skills. Im planning on adding more stuffs
        to the website and welcome any feedback from anyone. For now since i do
        not have any features to get feedback for my website you can leave
        feedbacks at my email in the contact details. Thank you for visiting!
      </h1>
      <Footer />
    </div>
  );
}

export default App;
