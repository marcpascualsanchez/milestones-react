import { IMilestone } from "../Milestone/Milestone.d";

export interface ITimeline {
  initialDate: Date;
  finalDate: Date;
  milestones: IMilestone[];
}
