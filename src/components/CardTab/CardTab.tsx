import { useState } from 'react';
import CardCarousel from '../CardCarousel';
import CardAccordion from '../CardAccordion';
import CardActions from '../CardActions';
import './CardTab.scss';
import '../../styles/layout.scss';

function CardTab() {
  const [tab, setTab] = useState('my-card');
  const [currentCardId, setCurrentCardId] = useState<number | null>(null);

  return (
    <div className="card-tabs__wrapper">
      <div className="q-tabs">
        <button
          className={`q-tab ${tab === 'my-card' ? 'q-tab--active' : ''}`}
          onClick={() => setTab('my-card')}
        >
          <span className="q-tab__label">My debit cards</span>
        </button>
        <button
          className={`q-tab ${tab === 'all-company' ? 'q-tab--active' : ''}`}
          onClick={() => setTab('all-company')}
        >
          <span className="q-tab__label">All company cards</span>
        </button>
      </div>

      <div className="q-card">
        <div className="q-tab-panel">
          {tab === 'my-card' && (
            <div className="row card-tabs__row">
              <div className="col col-px card-tabs__bg-blue">
                <CardCarousel onCardChange={setCurrentCardId} />
                <CardActions currentCardId={currentCardId} />
              </div>
              <div className="col col-px">
                <CardAccordion />
              </div>
            </div>
          )}
          {tab === 'all-company' && (
            <div className="text-h6">All company cards</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardTab;

