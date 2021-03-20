import { IMilestone } from "../Milestone/Milestone.d";
import { ITimeline } from "../Timeline/Timeline.d";

export const mockMilestones: IMilestone[] = [
  {
    date: new Date("2020-03-14T17:47:55.557Z"),
    title: "The first time we met",
    img:
      "https://images.unsplash.com/photo-1548051072-b34898021f8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "You were so dumb & funny...",
    isFav: true
  },
  {
    date: new Date("2020-04-17T17:47:55.557Z"),
    title: "first date at bk",
    img:
      "https://images.unsplash.com/photo-1589256972986-67e43d0e20dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description: "thx for inviting me",
    isFav: false
  },
  {
    date: new Date("2020-10-11T17:47:55.557Z"),
    title: "completely lost & hangover",
    img:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "the day we ended up in that random city lol",
    isFav: true
  },
  {
    date: new Date("2020-07-21T17:47:55.557Z"),
    title: "when you farted in my bf wedding lol",
    img:
      "https://images.unsplash.com/photo-1603998188758-5c984c2eddf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
    description: "you stupid fucker",
    isFav: true
  },
  {
    date: new Date("2021-06-01T17:47:55.557Z"),
    title: "last pandemic party",
    img:
      "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=964&q=80",
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
