import { emptyRoom } from "@constants/emptyRoom";
import { IRoom } from "interfaces/Room";
import { create } from "zustand";

interface ISelectedRoomStore {
  room: IRoom;
  setRoom: (room: IRoom) => void;
  clearStore: () => void;
}

const initialState = {
  room: emptyRoom,
};

export const useSelectedRoomStore = create<ISelectedRoomStore>()((set) => ({
  ...initialState,
  setRoom: (room: IRoom) =>
    set((state) => ({
      ...state,
      room,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
