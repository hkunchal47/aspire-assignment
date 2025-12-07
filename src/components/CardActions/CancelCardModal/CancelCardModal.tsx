import './CancelCardModal.scss';

interface CancelCardModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function CancelCardModal({ open, onClose, onConfirm }: CancelCardModalProps) {
  if (!open) return null;

  return (
    <div className="cancel-card-modal-overlay" onClick={onClose}>
      <div className="cancel-card-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cancel-card-modal__header">
          <div className="cancel-card-modal__icon">
            <i className="icon-Deactivate-card"></i>
          </div>
          <h2 className="cancel-card-modal__title">Cancel Card</h2>
          <button className="cancel-card-modal__close" onClick={onClose} aria-label="Close">
            <i className="icon-next" style={{ transform: 'rotate(45deg)' }}></i>
          </button>
        </div>
        <div className="cancel-card-modal__body">
          <p className="cancel-card-modal__message">
            Are you sure you want to cancel this card? This action cannot be undone and the card will be permanently deactivated.
          </p>
          <div className="cancel-card-modal__warning">
            <i className="icon-business-and-finance"></i>
            <span>You won't be able to use this card for any transactions after cancellation.</span>
          </div>
        </div>
        <div className="cancel-card-modal__actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Keep Card
          </button>
          <button type="button" className="btn btn-danger" onClick={onConfirm}>
            <i className="icon-Deactivate-card"></i>
            Cancel Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelCardModal;

