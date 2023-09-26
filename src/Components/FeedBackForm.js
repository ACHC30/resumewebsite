import React, { useState } from "react";
import Popup from "../Components/Popup";
import "../CSS/FeedBackForm.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xbjvzvpz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      setPopupOpen(true);
      if (response.ok) {
        // Feedback sent successfully, show a success message or perform any other actions
        setTitle("Thank You!");
        setContext("Feed Back Has Been Successfully Sent");
        setFeedback("");
      } else {
        // Handle error cases
        setTitle("Sorry!");
        setContext("Failed to send feedback.");
      }
    } catch (error) {
      setTitle("Sorry!");
      setContext(
        "An error occurred while sending feedback. Please try again later."
      );
      console.error("Error sending feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="FeedBackForm">
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={title}
        context={context}
      />
      <form onSubmit={handleSubmit}>
        <h1>Submit Your Feedback Here!</h1>
        <h3 style={{ width: "50%", marginLeft: "25%" }}>
          I wholeheartedly welcome all feedback for my website, whether it's
          about improvements or if you simply want to share your thoughts.
          Please feel free to write your comments here.
        </h3>
        <textarea
          className="textarea-submit"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <br></br>
        <br></br>
        <button className="button-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
