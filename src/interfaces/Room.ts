import { TSubject } from "types/Subject";
import { IStudent } from "./Student";

export interface IRoom {
  id: number;
  name: string;
  subject: TSubject;
  students: IStudent[];
}
