import Header from "../Public Page/Header";
import myFace from "../Images/MyFace.jpg";
function Contact() {
  return (
    <div>
      <Header />
      <div className="skill-parent">
        <div className="skill-child">
          <h1>Contact Me</h1>
          <img src={myFace} className="App-logo-circular" alt="logo" />
        </div>
        <div style={{ width: "10%", display: "inline-block" }}></div>
        <div
          className="skill-child"
          style={{
            background: "content-box radial-gradient(crimson, skyblue)",
            borderRadius: "30px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <h2>Address</h2>
            <p>Wolloonggabba, QLD 4102</p>

            <h2>Phone Number</h2>
            <p>0432 644 477 OR (+62) 432 644 477</p>

            <h2>Linkedin</h2>
            <p>linkedin.com/in/christopher-chandra-9601bb1b9</p>

            <h2>Github Profile</h2>
            <p>https://github.com/ACHC30</p>

            <h2>Email</h2>
            <p>chandrachristopher43@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
