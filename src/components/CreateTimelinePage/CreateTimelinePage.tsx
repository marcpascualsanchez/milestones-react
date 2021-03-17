import { useState } from "react";

import "../../styles.css";
import "./style.css";
import Timeline from "../Timeline/Timeline";
import { ITimeline } from "../Timeline/Timeline.d";
import { IMilestone } from "../Milestone/Milestone.d";
import { getUpdatedArray } from "../../utils";

const rightNow = new Date();

const defaultMilestone: IMilestone = {
  date: rightNow,
  title: "",
  description: "",
  img: "",
  isFav: false,
  isHighlighted: true
};

const defaultTimeline: ITimeline = {
  initialDate: rightNow,
  finalDate: rightNow,
  milestones: [defaultMilestone]
};

export default function CreateTimelinePage() {
  const [timeline, setTimeline] = useState(defaultTimeline);
  const [milestoneIndex, setMilestoneIndex] = useState(0);

  const handleSubmit = (event: any, newMilestone: IMilestone) => {
    event.preventDefault();
    let { initialDate, finalDate, milestones } = timeline;
    if (newMilestone.date.getTime() < timeline.initialDate.getTime()) {
      initialDate = newMilestone.date;
    }
    if (newMilestone.date.getTime() > timeline.finalDate.getTime()) {
      finalDate = newMilestone.date;
    }
    setTimeline({
      initialDate,
      finalDate,
      milestones: milestones.concat(defaultMilestone)
    });
    setMilestoneIndex(milestoneIndex + 1);
  };

  const updateMilestone = (propertyObj: any) => {
    const updatedMilestones: IMilestone[] = getUpdatedArray<IMilestone>(
      timeline.milestones,
      milestoneIndex,
      propertyObj
    );
    setTimeline({ ...timeline, milestones: updatedMilestones });
  };

  return (
    <div className="create-timeline-page">
      <Timeline timeline={timeline} />
      <form
        onSubmit={(e) => handleSubmit(e, timeline.milestones[milestoneIndex])}
      >
        <label>
          Title
          <input
            type="text"
            required
            onChange={(e) => updateMilestone({ title: e.target.value })}
          />
        </label>
        <label>
          Description
          <textarea
            onChange={(e) => updateMilestone({ description: e.target.value })}
          />
        </label>
        <label>
          Image link
          <input
            type="text"
            onChange={(e) => updateMilestone({ image: e.target.value })}
          />
        </label>
        <label>
          Date
          <input
            required
            type="date"
            onChange={(e) =>
              updateMilestone({ date: new Date(e.target.value) })
            }
          />
        </label>
        <input type="submit" value="Add" className="custom-button" />
        {/* <button disabled={milestone}>Save</button> */}
      </form>
    </div>
  );
}
