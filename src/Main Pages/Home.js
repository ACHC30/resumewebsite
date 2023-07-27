import "../CSS/Home.css";
import React, { useState, useEffect } from "react";
import Popup from "../Components/Popup";
import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import DownloadPDF from "../Components/DownloadPDF";

let hasUseEffectRun = false;

function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (!hasUseEffectRun) {
      // This code will run only once when the component mounts
      hasUseEffectRun = true;
      setPopupOpen(true);
    }
  }, []);

  return (
    <div className="App">
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />

      <Header />
      <h1 style={{ marginTop: "10%", margin: "5%" }}>
        This website serves as a personal project I have developed with the
        primary objective of honing and showcasing my coding skills.
        Additionally, it also serves as a platform for potential recruiters to
        assess my coding abilities. Going forward, I have plans to expand and
        enhance its content further. I wholeheartedly welcome constructive
        feedback from anyone, which can be directed to my email address provided
        in the contact details section. Your valuable input is greatly
        appreciated. Thank you for visiting!
      </h1>
      <DownloadPDF />
      <Footer />
    </div>
  );
}

export default Home;
