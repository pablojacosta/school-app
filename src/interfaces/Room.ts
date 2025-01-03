import { TSubject } from "types/Subject";

export interface IRoom {
  _id?: number;
  name: string;
  subject: TSubject;
}
