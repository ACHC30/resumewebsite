import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
import DownloadPDF from "../Components/DownloadPDF";
import myFace from "../Images/MyFace.jpg";
import useFadeIn from "../Components/FadeinHook.js";
import "../CSS/FadeIn.css";
import "../CSS/Home.css";

function Home() {
  const isVisible = useFadeIn();
  return (
    <div className={`fade-in ${isVisible ? "active" : ""}`}>
      <div className="App">
        <Header />
        <div className="parent">
          <div className="child">
            <div
              className={`fade-in ${isVisible ? "active" : ""} animationLeft`}
            >
              <img src={myFace} className="App-logo-circular" alt="logo" />
            </div>
          </div>

          <div className="child">
            <div
              className={`fade-in ${isVisible ? "active" : ""} animationRight`}
            >
              <h1>A bit about me</h1>
              <p>
                My name is Christopher Chandra. I am a software developer for
                both the back and front end of development. Ever since I was a
                child I was always quiet, and I was also fascinated by
                technology. Building high-quality software always makes people's
                lives easier, which is why I love building software. As a
                follow-up to my father's legacy, I aim to work in the IT
                industry to do what I love and help others in the process as
                well.
              </p>
            </div>
          </div>
        </div>

        <DownloadPDF />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
