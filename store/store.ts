import {create} from 'zustand';
import { ICollection } from '@/types';

interface AppState {
  currentCollection: ICollection | null;
  setCurrentCollection: (collectionData: ICollection) => void;
}


const useStore = create<AppState>((set) => ({
  currentCollection: null,
  setCurrentCollection: (collectionData: ICollection | null) => set({ currentCollection: collectionData }),
}));

export default useStore;
