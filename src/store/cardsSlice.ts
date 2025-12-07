import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../types/card';

interface CardsState {
  allCards: Card[];
}

const initialState: CardsState = {
  allCards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.allCards = action.payload;
    },
    addCard: (state, action: PayloadAction<Card | Card[]>) => {
      if (Array.isArray(action.payload)) {
        state.allCards = [...action.payload, ...state.allCards];
      } else {
        state.allCards.unshift(action.payload);
      }
    },
    cancelCard: (state, action: PayloadAction<number>) => {
      const card = state.allCards.find((c) => c.id === action.payload);
      if (card) {
        card.isCancelled = true;
      }
    },
  },
});

export const { setCards, addCard, cancelCard } = cardsSlice.actions;
export default cardsSlice.reducer;

