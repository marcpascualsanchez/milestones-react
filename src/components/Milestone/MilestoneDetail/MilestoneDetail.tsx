import "./style.css";
import "../../../styles.css";
import { IMilestone } from "../Milestone.d";

interface IProps {
  milestone: IMilestone;
}

function getFormatedDate(date: Date) {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

export default function MilestoneDetail(props: IProps) {
  return (
    <div className="container">
      <h3>{getFormatedDate(props.milestone.date)}</h3>
      <h2>{props.milestone.title}</h2>
      <img src={props.milestone.img} alt="Milestone"></img>
      <p>{props.milestone.description}</p>
    </div>
  );
}
