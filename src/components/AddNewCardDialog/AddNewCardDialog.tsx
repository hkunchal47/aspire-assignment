import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addCard } from '../../store/cardsSlice';
import './AddNewCardDialog.scss';

interface AddNewCardDialogProps {
  open: boolean;
  onClose: () => void;
}

function AddNewCardDialog({ open, onClose }: AddNewCardDialogProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cardObject = {
      id: randomNumber(104, 200),
      name: name,
      card_number: Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(),
      expiry: randomNumber(1, 30) + '/' + randomNumber(22, 30),
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
    };
    dispatch(addCard(cardObject));
    setName('');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="add-card-modal-overlay" onClick={onClose}>
      <div className="add-card-modal" onClick={(e) => e.stopPropagation()}>
        <div className="add-card-modal__header">
          <h2 className="add-card-modal__title">Add New Card</h2>
          <button className="add-card-modal__close" onClick={onClose} aria-label="Close">
            <i className="icon-next" style={{ transform: 'rotate(45deg)' }}></i>
          </button>
        </div>
        <div className="add-card-modal__body">
          <form onSubmit={onSubmit} className="add-card-form">
            <div className="form-group">
              <label className="form-label">
                Card Name <span className="required">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Mark Henry"
                className="form-input"
                required
                autoFocus
              />
              <p className="form-hint">This name will be displayed on your card</p>
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <i className="icon-box"></i>
                Add Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewCardDialog;

