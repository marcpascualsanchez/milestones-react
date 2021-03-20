import "../../styles.css";
import "./style.css";
import Milestone from "../Milestone/Milestone";
import { IMilestone } from "../Milestone/Milestone.d";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface IProps {
  milestones?: IMilestone[];
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

const rightNow = new Date();

export default function Timeline(props: IProps) {
  let { id } = useParams<any>();
  const [milestones, setMilestones] = useState(props.milestones || null);
  const [intervalDates, setIntervalDates] = useState({
    initialDate: milestones ? milestones[0].date : rightNow,
    finalDate: milestones ? milestones[0].date : rightNow
  });
  useEffect(() => {
    if (props.milestones) {
      setMilestones(props.milestones);
    }
  }, [props.milestones]);
  let isLoading = false;
  if (!milestones) {
    // TODO: get timeline by id from DB -> setMilestones()
    if (!isLoading) {
      isLoading = true;
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "GET"
      };
      console.log("fetching");
      fetch(`/milestones/${id}`, options).then(async (answer) => {
        const response = await answer.json();
        console.log("response", response);
        if (response && response.milestones) {
          response.milestones.forEach(
            (m: IMilestone) => (m.date = new Date(m.date))
          );
          setMilestones(response.milestones);
        }
        isLoading = false;
      });
    }
    return <div className="loading"></div>;
  }

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (milestones.length) {
    let newInitialDate = milestones[0].date;
    let newFinalDate = milestones[0].date;
    milestones.forEach((m) => {
      if (m.date.getTime() < newInitialDate.getTime()) {
        newInitialDate = m.date;
      }
      if (m.date.getTime() > newFinalDate.getTime()) {
        newFinalDate = m.date;
      }
    });
    if (
      newInitialDate.getTime() !== intervalDates.initialDate.getTime() ||
      newFinalDate.getTime() !== intervalDates.finalDate.getTime()
    ) {
      setIntervalDates({
        initialDate: newInitialDate,
        finalDate: newFinalDate
      });
    }
  }
  const initialTime = intervalDates.initialDate.getTime();
  const totalTimeMS =
    intervalDates.finalDate.getTime() - intervalDates.initialDate.getTime();

  return (
    <div className="Timeline">
      <div className="diagram">
        {milestones.map((m) => (
          <Milestone
            milestone={m}
            style={getMilestonePositionStyle(initialTime, totalTimeMS, m)}
          />
        ))}
      </div>
    </div>
  );
}
