import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCards } from '../store/cardsSlice';
import { CardTab, AddNewCardDialog } from '../components';
import cardData from '../resources/card.json';
import '../styles/CardsPage.scss';

function CardsPage() {
  const dispatch = useAppDispatch();
  const [addCardModal, setAddCardModal] = useState(false);
  const allCards = useAppSelector((state) => state.cards.allCards);

  useEffect(() => {
    // Initialize cards from JSON data only once if store is empty
    if (allCards.length === 0) {
      if (Array.isArray(cardData)) {
        dispatch(setCards(cardData));
      } else {
        dispatch(setCards([cardData]));
      }
    }
  }, [dispatch, allCards.length]);

  return (
    <div className="cards">
      <div className="cards__blance">
        <div className="cards__blance-label">Available balance</div>
        <div className="cards__blance-amount">
          <div className="blance-amount">
            <span>S$</span> 3,000
          </div>
          <button
            className="q-btn"
            onClick={() => setAddCardModal(true)}
          >
            <i className="icon-box"></i>
            New card
          </button>
        </div>
      </div>
      <CardTab />
      <AddNewCardDialog
        open={addCardModal}
        onClose={() => setAddCardModal(false)}
      />
    </div>
  );
}

export default CardsPage;

