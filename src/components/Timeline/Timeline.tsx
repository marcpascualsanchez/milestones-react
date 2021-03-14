import "../../styles.css";
import "./style.css";
import { ITimeline } from "./Timeline.d";
import Milestone from "../Milestone/Milestone";
import { IMilestone } from "../Milestone/Milestone.d";
import { useParams } from "react-router-dom";

interface IProps {
  timeline: ITimeline;
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

export default function Timeline({ timeline }: IProps) {
  let { id } = useParams() as any;
  console.log("TODO: fetch db by id", id);
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
