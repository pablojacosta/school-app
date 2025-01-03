import { IRoom } from "interfaces/Room";
import { IRoomWithStudents } from "interfaces/RoomWithStudents";
import { IStudent } from "interfaces/Student";
import { emptyRoom } from "utils/helpers/emptyRoom";
import { create } from "zustand";

interface ISelectedRoomStore {
  room: IRoomWithStudents;
  setRoom: (room: IRoom, students: IStudent[]) => void;
  clearStore: () => void;
}

const initialState = {
  room: emptyRoom,
};

export const useSelectedRoomStore = create<ISelectedRoomStore>()((set) => ({
  ...initialState,
  setRoom: (room: IRoom, students: IStudent[]) =>
    set((state) => ({
      ...state,
      room: {
        id: room._id,
        name: room.name,
        subject: room.subject,
        students,
      },
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
