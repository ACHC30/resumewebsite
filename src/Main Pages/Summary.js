import myFace from "../Images/MyFace.jpg";
import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
function Summary() {
  return (
    <div className="App">
      <Header />

      <div className="skill-parent">
        <div className="skill-child">
          <img src={myFace} className="App-logo-circular" alt="logo" />
        </div>

        <div style={{ width: "5%", display: "inline-block" }}></div>

        <div className="skill-child">
          <h1 style={{ textAlign: "Justify" }}>A bit about me</h1>
          <p style={{ textAlign: "Justify", width: "350px", height: "160px" }}>
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
