import { IStudent } from "./Student";

export interface IRoom {
  id: number;
  name: string;
  students: IStudent[];
}
