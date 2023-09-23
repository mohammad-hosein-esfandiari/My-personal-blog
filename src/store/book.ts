import { create } from 'zustand'

interface BearState {
  book: any[]
  addPaperToBook: (by: any) => void
}

export const useBook = create<BearState>()((set) => ({
  book: [],
  addPaperToBook: (arr) => set((state) => ({book:[...state.book,...arr]})),
}))