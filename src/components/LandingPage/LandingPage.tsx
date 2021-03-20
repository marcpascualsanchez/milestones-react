import "../../styles.css";
import "./style.css";
import Timeline from "../Timeline/Timeline";
import { mockMilestones } from "./mockTimeline";

async function goToRandom() {
  const options = {
    headers: { "Content-Type": "application/json" },
    method: "GET"
  };
  const answer = await fetch(`/random`, options);
  const _id = await answer.json();
  window.location.href = `/#/${_id}`;
}

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <p>Have you ever wanted to create & share your squad stories?</p>
      <p>Now you can.</p>
      <div className="action-container">
        <button
          className="secondary call-to-action"
          onClick={async () => goToRandom()}
        >
          See random
        </button>
        <button
          className="secondary call-to-action"
          onClick={() => (window.location.href = "/#/new")}
        >
          Create one
        </button>
      </div>
      <p>Or check out this demo!</p>
      <div className="demo-container">
        <Timeline milestones={mockMilestones} />
      </div>
    </div>
  );
}
