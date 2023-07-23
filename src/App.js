import "./App.css";
import React, { useEffect } from "react";
import Header from "./Public Page/Header";
import Footer from "./Public Page/Footer";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function App() {
  useEffect(() => {
    // Code to be executed when the component mounts
    NotificationManager.info("This Website Is Not Mobile Friendly!");
  }, []); // Empty dependency array means it only runs once on mount
  return (
    <div className="App">
      <Header />
      <NotificationContainer />
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
