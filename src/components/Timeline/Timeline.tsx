import "../../styles.css";
import "./style.css";
import { ITimeline } from "./Timeline.d";
import Milestone from "../Milestone/Milestone";
import { IMilestone } from "../Milestone/Milestone.d";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface IProps {
  timeline?: ITimeline;
}

function getMilestonePositionStyle(
  initialTime: number,
  totalTime: number,
  milestone: IMilestone
) {
  const percentage =
    ((milestone.date.getTime() - initialTime) / totalTime) * 100;
  return {
    left: `${percentage}%`
  };
}

export default function Timeline(props: IProps) {
  let { timeline } = props;
  const [isLoading, setIsLoading] = useState(timeline === undefined);
  let { id } = useParams() as any;
  if (!timeline) {
    timeline = {
      milestones: [],
      initialDate: new Date(),
      finalDate: new Date()
    }; // TODO: get timeline by id from DB -> setIsLoading(false)
  }

  if (isLoading) {
    return <div className="loading"></div>;
  }

  const initialTime = timeline.initialDate.getTime();
  const totalTimeMS =
    timeline.finalDate.getTime() - timeline.initialDate.getTime();

  return (
    <div className="Timeline">
      <div className="diagram">
        {timeline.milestones.map((m) => (
          <Milestone
            milestone={m}
            style={getMilestonePositionStyle(initialTime, totalTimeMS, m)}
          />
        ))}
      </div>
    </div>
  );
}
