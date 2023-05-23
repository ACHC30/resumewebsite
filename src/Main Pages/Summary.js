import myFace from "../Images/MyFace.jpg";
import Header from "../Public Page/Header";
import Footer from "../Public Page/Footer";
function Summary() {
  return (
    <div className="App">
      <Header />
      <p style={{ textAlign: "center" }}>
        Master’s graduate Computer Science with skills in Web and Mobile
        Application Development, Object Oriented Programming, and scrum IT
        Project Management. As a graduate of Queensland University of
        Technology, has worked across various projects, utilizing Agile
        methodology of Project Management. Has good knowledge in React
        JavaScript and C# and is passionate to collaborate with a team to
        increase my overall skills. Most importantly, I won't leave things
        halfway when working with anyone. I tend to finish what I started. I
        hope my skills and passion would help your business in any way possible.
      </p>
      <div className="App-logo-wrapper">
        <img src={myFace} className="App-logo" alt="logo" />
      </div>
      <Footer />
    </div>
  );
}

export default Summary;
