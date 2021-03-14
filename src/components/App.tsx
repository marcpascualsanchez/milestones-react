import "../styles.css";
import Timeline from "./Timeline/Timeline";
import { IMilestone } from "./Milestone/Milestone.d";
import { ITimeline } from "./Timeline/Timeline.d";

// TODO: load from real source
const mockMilestones: IMilestone[] = [
  {
    date: new Date("2020-03-14T17:47:55.557Z"),
    title: "The first milestone title",
    img: "https://picsum.photos/300/200",
    description: "This is a nice description of the milestone",
    isFav: true
  },
  {
    date: new Date("2020-09-12T17:47:55.557Z"),
    title: "The intermediate milestone fav",
    img: "https://picsum.photos/300/200",
    description: "This is a nice description of the milestone",
    isFav: true
  },
  {
    date: new Date("2020-10-11T17:47:55.557Z"),
    title: "The intermediate milestone not fav",
    img: "https://picsum.photos/300/200",
    description: "This is a nice description of the milestone",
    isFav: false
  },
  {
    date: new Date("2021-06-01T17:47:55.557Z"),
    title: "The last milestone title",
    img: "https://picsum.photos/300/200",
    description: "This is a nice description of the milestone",
    isFav: true
  }
];
let initialDate: Date = mockMilestones[0].date;
let finalDate: Date = mockMilestones[0].date;
mockMilestones.forEach((m) => {
  const timestamp = m.date.getTime();
  if (timestamp > finalDate.getTime()) {
    finalDate = m.date;
  }
  if (timestamp < initialDate.getTime()) {
    initialDate = m.date;
  }
});
const timeline: ITimeline = {
  milestones: mockMilestones,
  initialDate,
  finalDate
};

export default function App() {
  return (
    <div className="App">
      <h1>Milestones app</h1>
      <Timeline timeline={timeline} />
    </div>
  );
}
