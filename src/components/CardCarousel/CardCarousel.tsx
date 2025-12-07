import { useState, useMemo, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Card } from '../../types/card';
import CreditCardDisplay from './CreditCardDisplay';
import './CardCarousel.scss';

interface CardCarouselProps {
  onCardChange?: (cardId: number | null) => void;
}

function CardCarousel({ onCardChange }: CardCarouselProps) {
  const allCards = useAppSelector((state) => state.cards.allCards);
  const [slide, setSlide] = useState(1);

  const activeCards = useMemo(() => {
    return allCards.filter((card: Card) => !card.isCancelled);
  }, [allCards]);

  // Notify parent of current card change
  useEffect(() => {
    if (activeCards.length > 0 && slide > 0 && slide <= activeCards.length) {
      const currentCard = activeCards[slide - 1];
      onCardChange?.(currentCard.id);
    } else {
      onCardChange?.(null);
    }
  }, [slide, activeCards, onCardChange]);

  return (
    <div className="cards__carousel">
      <div className="cards__show-number">
        <i className="icon-remove_red_eye-24px"></i>Show card number
      </div>
      <div className="q-carousel">
        <div className="q-carousel__slides" style={{ height: '250px' }}>
          {activeCards.map((card: Card, index: number) => (
            <div
              key={card.id}
              className={`q-carousel-slide ${index + 1 === slide ? 'active' : ''}`}
              style={{ display: index + 1 === slide ? 'block' : 'none' }}
            >
              <CreditCardDisplay card={card} />
            </div>
          ))}
        </div>
        {activeCards.length > 1 && (
          <div className="q-carousel__navigation q-carousel__navigation--bottom">
            {activeCards.map((_, index: number) => (
              <button
                key={index}
                className={`q-carousel__navigation-icon ${
                  index + 1 === slide ? 'q-carousel__navigation-icon--active' : ''
                }`}
                onClick={() => setSlide(index + 1)}
              >
                <i></i>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardCarousel;

