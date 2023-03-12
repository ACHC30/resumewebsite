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
        <div className="skill-child" style={{ textAlign: "left" }}>
          <ol>
            <li>Address: Wolloonggabba, QLD 4102</li>
            <li>Phone Number: 0432 644 477 OR (+62) 432 644 477</li>
            <li>Linkedin: linkedin.com/in/christopher-chandra-9601bb1b9</li>
            <li>Github Profile: https://github.com/ACHC30 </li>
            <li>Email: chandrachristopher43@gmail.com</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Contact;
