import { IMilestone } from "../Milestone/Milestone.d";
import { ITimeline } from "../Timeline/Timeline.d";

export const mockMilestones: IMilestone[] = [
  {
    date: new Date("2020-03-14T17:47:55.557Z"),
    title: "The first time we met",
    img: "https://picsum.photos/300/200",
    description: "You were so dumb & funny...",
    isFav: true
  },
  {
    date: new Date("2020-04-17T17:47:55.557Z"),
    title: "first date at bk",
    img: "https://picsum.photos/300/200",
    description: "thx for inviting me",
    isFav: false
  },
  {
    date: new Date("2020-10-11T17:47:55.557Z"),
    title: "completely lost & hangover",
    img: "https://picsum.photos/300/200",
    description: "the day we ended up in that random city lol",
    isFav: true
  },
  {
    date: new Date("2020-07-21T17:47:55.557Z"),
    title: "when you farted in my bf wedding lol",
    img: "https://picsum.photos/300/300",
    description: "you stupid fucker",
    isFav: true
  },
  {
    date: new Date("2021-06-01T17:47:55.557Z"),
    title: "last pandemic party",
    img: "https://picsum.photos/300/200",
    description: "how much i miss this shit dude...",
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

export const mockTimeline: ITimeline = {
  milestones: mockMilestones,
  initialDate,
  finalDate
};
