import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { cancelCard } from '../../store/cardsSlice';
import CancelCardModal from './CancelCardModal';
import './CardActions.scss';
import '../../styles/layout.scss';

interface CardActionsProps {
  currentCardId: number | null;
}

function CardActions({ currentCardId }: CardActionsProps) {
  const dispatch = useAppDispatch();
  const [cancelCardModal, setCancelCardModal] = useState(false);

  const handleCancelConfirm = () => {
    if (currentCardId !== null) {
      dispatch(cancelCard(currentCardId));
    }
    setCancelCardModal(false);
  };

  return (
    <>
      <div className="actions">
        <div className="actions__item">
          <span className="icon icon-Freeze-card">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </span>
          <span className="actions__item-label">
            Freeze<br />card
          </span>
        </div>
        <div className="actions__item">
          <span className="icon icon-Set-spend-limit">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
            <span className="path5"></span>
            <span className="path6"></span>
            <span className="path7"></span>
            <span className="path8"></span>
          </span>
          <span className="actions__item-label">
            Set spend<br />limit
          </span>
        </div>
        <div className="actions__item">
          <span className="icon icon--white icon-GPay">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
            <span className="path5"></span>
            <span className="path6"></span>
          </span>
          <span className="actions__item-label">
            Add to<br />GPay
          </span>
        </div>
        <div className="actions__item">
          <span className="icon icon-Replace-card">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </span>
          <span className="actions__item-label">
            Replace<br />card
          </span>
        </div>
        <div className="actions__item" onClick={() => setCancelCardModal(true)}>
          <span className="icon icon-Deactivate-card">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </span>
          <span className="actions__item-label">
            Cancel<br />card
          </span>
        </div>
      </div>
      <CancelCardModal
        open={cancelCardModal}
        onClose={() => setCancelCardModal(false)}
        onConfirm={handleCancelConfirm}
      />
    </>
  );
}

export default CardActions;

