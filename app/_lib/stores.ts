import { create } from "zustand";
import { LoginResponseData } from "./types";
import { persist, createJSONStorage } from "zustand/middleware";

type authStore = {
  data: LoginResponseData | null;
  setData: (newData: LoginResponseData) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  isVenueManager: () => boolean;
};

export const useAuth = create<authStore>()(
  persist(
    (set, get) => ({
      data: null,
      setData: (newData: LoginResponseData) => {
        set({ data: newData });
      },
      logout: () => set({ data: null }),
      isAuthenticated: () => {
        return get().data != null;
      },
      isVenueManager: () => {
        return get().data?.venueManager ?? false;
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export enum ToastType {
  SUCCESS,
  ERROR,
}

// Toast message type definition
export type ToastMessage = {
  message: string;
  duration: number;
  type: ToastType;
};

// Toast store
export const useToast = create<{
  messages: ToastMessage[];
  addMessage: (message: ToastMessage) => void;
  removeMessage: (index: number) => void;
  clearMessages: () => void;
}>()((set) => ({
  // Toast store state and actions
  messages: [],
  // Add a new toast message to the store
  addMessage: (message: ToastMessage) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  // Remove a toast message from the store by its index
  removeMessage: (index: number) => {
    set((state) => ({
      messages: state.messages.filter((_, i) => i !== index),
    }));
  },
  // Clear all toast messages from the store
  clearMessages: () => {
    set({ messages: [] });
  },
}));
