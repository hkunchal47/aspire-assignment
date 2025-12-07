import { useState } from 'react';
import TransactionListItem from './TransactionListItem';
// Icons will be loaded from public folder
const acc1Icon = '/icons/acc1.svg';
const acc2Icon = '/icons/acc2.svg';
import './CardAccordion.scss';
import '../../styles/layout.scss';

function CardAccordion() {
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [transactionsOpen, setTransactionsOpen] = useState(true);

  return (
    <div className="cards-accordion">
      <div className="q-list">
        <div className="q-expansion-item">
          <button
            className="q-expansion-item__header"
            onClick={() => setCardDetailsOpen(!cardDetailsOpen)}
          >
            <img src={acc1Icon} alt="" className="q-expansion-item__icon" />
            <span className="q-expansion-item__label">Card details</span>
            <i className={`icon-down-arrow ${cardDetailsOpen ? 'open' : ''}`}></i>
          </button>
          {cardDetailsOpen && (
            <div className="q-expansion-item__content">
              <div className="q-card">
                <div className="q-card-section">coming soon...</div>
              </div>
            </div>
          )}
        </div>

        <div className="q-expansion-item">
          <button
            className="q-expansion-item__header"
            onClick={() => setTransactionsOpen(!transactionsOpen)}
          >
            <img src={acc2Icon} alt="" className="q-expansion-item__icon" />
            <span className="q-expansion-item__label">Recent transactions</span>
            <i className={`icon-down-arrow ${transactionsOpen ? 'open' : ''}`}></i>
          </button>
          {transactionsOpen && (
            <div className="q-expansion-item__content">
              <div className="q-card">
                <div className="q-card-section">
                  <div className="transaction">
                    {[
                      { merchant: 'Hamleys', date: '20 May 2020', amount: 'S$ 150', type: 'Refund on debit card', isCredit: true },
                      { merchant: 'Hamleys', date: '20 May 2020', amount: 'S$ 150', type: 'Refund on debit card', isCredit: false},
                      { merchant: 'Hamleys', date: '20 May 2020', amount: 'S$ 150', type: 'Refund on debit card', isCredit: false},
                      { merchant: 'Hamleys', date: '20 May 2020', amount: 'S$ 150', type: 'Refund on debit card', isCredit: true },
                    ].map((transaction, index) => (
                      <TransactionListItem key={index} {...transaction} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardAccordion;

