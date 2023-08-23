import Header from "../Public Page/Header";
import myFace from "../Images/MyFace.jpg";
import Footer from "../Public Page/Footer";
import useFadeIn from "../Components/FadeinHook.js";
import "../CSS/FadeIn.css";
import "../CSS/ParentChild.css";
import "../CSS/Contact.css";

function Contact() {
  const isVisible = useFadeIn();
  return (
    <div className={`fade-in ${isVisible ? "active" : ""}`}>
      <div className="Contact">
        <Header />
        <div className="parent">
          <div className="child">
            <div
              className={`fade-in ${isVisible ? "active" : ""} animationLeft`}
            >
              <h1 style={{ textAlign: "center" }}>Contact Me</h1>
              <img src={myFace} className="App-logo-circular" alt="logo" />
            </div>
          </div>

          <div className="child">
            <div
              className={`fade-in ${isVisible ? "active" : ""} animationRight`}
            >
              <div
                style={{
                  background: "content-box radial-gradient(#477d71, skyblue)",
                  borderRadius: "30px",
                  padding: "10px",
                }}
              >
                <div style={{ margin: "10px" }}>
                  <h2>Address</h2>
                  <p>Wolloonggabba, QLD 4102</p>

                  <h2>Phone Number</h2>
                  <p>0432 644 477 </p>

                  <h2>Email</h2>
                  <p>christopher_chandra@outlook.com</p>

                  <h2>Linkedin</h2>
                  <a href="https://www.linkedin.com/in/christopher-chandra-9601bb1b9/">
                    <p>linkedin.com/in/christopher-chandra</p>
                  </a>

                  <h2>Github Profile</h2>
                  <a href="https://github.com/ACHC30">
                    <p>https://github.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
