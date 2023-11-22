import { IRoom } from "./Room";
import { IStudent } from "./Student";

export interface IRoomWithStudents extends IRoom {
  students: IStudent[];
}
