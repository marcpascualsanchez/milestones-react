import { useState } from "react";

import "../../styles.css";
import "./style.css";
import Timeline from "../Timeline/Timeline";
import { IMilestone } from "../Milestone/Milestone.d";
import { getDateInputValue, getUpdatedArray } from "../../utils";
import { ITimeline } from "../Timeline/Timeline.d";

const rightNow = new Date();

const defaultMilestone: IMilestone = {
  date: rightNow,
  title: "",
  description: "",
  img: "",
  isFav: false,
  isHighlighted: true
};

export default function CreateTimelinePage() {
  const [milestones, setMilestones] = useState([{ ...defaultMilestone }]);
  const [milestoneIndex, setMilestoneIndex] = useState(0);
  let dateInputElement: HTMLFormElement | undefined;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setMilestones(milestones.concat(defaultMilestone));
    setMilestoneIndex(milestoneIndex + 1);
    if (dateInputElement) {
      dateInputElement.reset();
    }
  };

  const updateMilestone = (propertyObj: any) => {
    const updatedMilestones: IMilestone[] = getUpdatedArray<IMilestone>(
      milestones,
      milestoneIndex,
      propertyObj
    );
    setMilestones(updatedMilestones);
  };

  const save = async () => {
    const body = JSON.stringify({
      milestones: milestones.slice(0, -1)
    });
    const options = {
      body,
      headers: { "Content-Type": "application/json" },
      method: "POST"
    };
    const answer = await fetch("/milestones", options);
    const timeline: ITimeline = await answer.json();
    if (timeline && timeline._id) window.location.href = `/#/${timeline._id}`;
  };

  return (
    <div className="create-timeline-page">
      <Timeline milestones={milestones} />
      {milestones.length > 2 && (
        <div className="save-container">
          <button className="call-to-action" onClick={() => save()}>
            Save
          </button>
        </div>
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        ref={(el) => (dateInputElement = el ? el : undefined)}
      >
        <label>
          Title
          <input
            type="text"
            value={milestones[milestoneIndex].title}
            required
            onChange={(e) => updateMilestone({ title: e.target.value })}
          />
        </label>
        <label>
          Description
          <textarea
            value={milestones[milestoneIndex].description}
            onChange={(e) => updateMilestone({ description: e.target.value })}
          />
        </label>
        <label>
          Image link{" "}
          <span className="sub-label">
            (example: https://i.imgur.com/nwhnRsZ.jpg)
          </span>
          <input
            type="text"
            value={milestones[milestoneIndex].img}
            onChange={(e) => updateMilestone({ img: e.target.value })}
          />
        </label>
        <label>
          Date
          <input
            required
            type="date"
            onChange={(e) =>
              updateMilestone({ date: getDateInputValue(e.target.value) })
            }
          />
        </label>
        <div className="add-container">
          <input type="submit" value="Add" className="custom-button" />
        </div>
      </form>
    </div>
  );
}
