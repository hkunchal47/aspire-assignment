import { Card } from '../../../types/card';
import './CreditCardDisplay.scss';

interface CreditCardDisplayProps {
  card: Card;
}

function CreditCardDisplay({ card }: CreditCardDisplayProps) {
  return (
    <div className="card" style={{ background: card.color }}>
      <div className="card__logo">
        <i className="icon-Aspire-Logo"></i>
      </div>
      <div className="card__holder-name">{card.name}</div>
      <div className="card__number">
        <div className="card__number-hidden">
          {card.card_number.split('').map((num, idx) => (
            <span
              key={idx}
              className={idx <= 11 ? 'hidden-digit' : ''}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
      <div className="card__meta">
        <div className="card__validity">
          <span className="label">Thru:</span>
          <p className="info">{card.expiry}</p>
        </div>
        <div className="card__cvv">
          <span className="label">CVV:</span>
          <p className="info">***</p>
        </div>
      </div>
      <div className="card__provider">
        <i className="icon-Visa-Logo"></i>
      </div>
    </div>
  );
}

export default CreditCardDisplay;

