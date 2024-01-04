import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBearStore = create(
    persist(
        (set, get) => ({
            bears: 0,
            increase: () => set((state) => ({ bears: state.bears + 1 })),
            removeAll: () => set({ bears: 0 }),
        }),
        {
            name: "bear-storage", // name of the item in the storage (must be unique)
            skipHydration: true,
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
export default useBearStore;
