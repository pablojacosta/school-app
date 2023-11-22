import { create } from "zustand";

interface IModalStore {
  showModal: boolean;
  isSuccess: boolean;
  isRoom: boolean;
  setShowModal: (showModal: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setIsRoom: (isRoom: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  showModal: false,
  isSuccess: false,
  isRoom: false,
};

export const useModalStore = create<IModalStore>()((set) => ({
  ...initialState,
  setShowModal: (showModal: boolean) =>
    set((state) => ({
      ...state,
      showModal,
    })),
  setIsSuccess: (isSuccess: boolean) =>
    set((state) => ({
      ...state,
      isSuccess,
    })),
  setIsRoom: (isRoom: boolean) =>
    set((state) => ({
      ...state,
      isRoom,
    })),
  clearStore: () => set(() => ({ ...initialState })),
}));
