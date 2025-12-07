export interface Card {
  id: number;
  name: string;
  card_number: string;
  color: string;
  expiry: string;
  isCancelled?: boolean;
}

export interface CardsState {
  allCards: Card[];
}

