import { IMilestone } from "../Milestone/Milestone.d";

export interface ITimeline {
  _id?: string;
  initialDate: Date;
  finalDate: Date;
  milestones: IMilestone[];
}
