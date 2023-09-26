import Header from "../Public Page/Header";
import FeedbackForm from "../Components/FeedBackForm";
import useFadeIn from "../Components/FadeinHook.js";
import "../CSS/FadeIn.css";

function FeedBack() {
  const isVisible = useFadeIn();
  return (
    <div className={`fade-in ${isVisible ? "active" : ""}`}>
      <Header />
      <FeedbackForm />
    </div>
  );
}

export default FeedBack;
