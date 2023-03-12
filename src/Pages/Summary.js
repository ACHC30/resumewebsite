import myFace from "../Images/MyFace.jpg";
import Header from "../Public Page/Header";
function Summary() {
  return (
    <div>
      <Header />
      <p style={{ textAlign: "center" }}>
        A recent graduate from Queensland University of Technology (QUT), I am
        actively looking for a job in order to gain some work experience for my
        Skill assessment. I'm a team player, loyal to a fault, very adaptable, I
        can learn quickly as I work through my tasks. Most importantly, I won't
        leave things half way when working with anyone. I tend to finish what I
        started and am open to challenges that come my way.
      </p>
      <div className="App-logo-wrapper">
        <img src={myFace} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Summary;
