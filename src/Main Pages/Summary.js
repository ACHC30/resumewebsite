import myFace from "../Images/MyFace.jpg";
import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import "../CSS/ParentChild.css";
import "../CSS/Summary.css";

function Summary() {
  return (
    <div className="Summary">
      <Header />

      <div className="parent">
        <div className="child">
          <img src={myFace} className="App-logo-circular" alt="logo" />
        </div>

        <div className="child">
          <h1>A bit about me</h1>
          <p>
            I am a software developer for both the back and front end of
            development. Ever since I was a child I was always quiet, and I was
            also fascinated by technology. Building high-quality software always
            makes people's lives easier, which is why I love building software.
            As a follow-up to my father's legacy, I aim to work in the IT
            industry to do what I love and help others in the process as well.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Summary;
