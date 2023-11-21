import { IRoom } from "./Room";
import { IStudent } from "./Student";

export interface IRoomManage {
  room: IRoom;
  students: IStudent[];
}
