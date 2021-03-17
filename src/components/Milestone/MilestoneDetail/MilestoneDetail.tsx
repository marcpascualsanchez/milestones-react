import "./style.css";
import "../../../styles.css";
import { IMilestone } from "../Milestone.d";

interface IProps {
  milestone: IMilestone;
}

function getFormatedDate(date: Date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export default function MilestoneDetail(props: IProps) {
  return (
    <div className="container">
      {props.milestone.date && <h3>{getFormatedDate(props.milestone.date)}</h3>}
      {props.milestone.title && <h2>{props.milestone.title}</h2>}
      {props.milestone.img && (
        <img src={props.milestone.img} alt="Milestone"></img>
      )}
      {props.milestone.description && <p>{props.milestone.description}</p>}
    </div>
  );
}
