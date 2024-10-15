import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

const FinderGame = (set) => ({
    txtFinderGame: '',
    updateTxtFinderGame: (texto) => set(() => ({ txtFinderGame: texto })),
})

export const UseFinderGame = create(devtools(FinderGame))
