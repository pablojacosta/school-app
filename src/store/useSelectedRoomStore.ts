import { emptyRoom } from "@constants/emptyRoom";
import { IRoom } from "interfaces/Room";
import { IStudent } from "interfaces/Student";
import { create } from "zustand";

interface ISelectedRoomStore {
  room: IRoom;
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
        id: room.id,
        name: room.name,
        students,
      },
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
