import { useState } from "react";
import "../../styles.css";
import "./style.css";
import { IMilestone } from "./Milestone.d";
import MilestoneDetail from "./MilestoneDetail/MilestoneDetail";
import { ReactComponent as Marker } from "./assets/marker.svg";
import { ReactComponent as FavMarker } from "./assets/fav-marker.svg";

interface IProps {
  milestone: IMilestone;
  style: any;
}

export default function Milestone(props: IProps) {
  const [isHover, setIsHover] = useState(false);

  let marker;
  if (props.milestone.isFav) {
    marker = (
      <FavMarker
        style={props.style}
        className={`marker milestone ${
          props.milestone.isHighlighted ? "highlight" : ""
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    );
  } else {
    marker = (
      <Marker
        style={props.style}
        className="marker milestone"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    );
  }

  let detail: any = "";
  if (isHover) {
    detail = (
      <div
        style={props.style}
        className="opened milestone"
        onMouseLeave={() => setIsHover(false)}
      >
        <MilestoneDetail milestone={props.milestone} />
      </div>
    );
  }
  return (
    <div>
      <div className="marker-container">{marker}</div>
      {detail}
    </div>
  );
}
