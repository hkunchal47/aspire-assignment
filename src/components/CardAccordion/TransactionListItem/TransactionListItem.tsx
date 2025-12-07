import './TransactionListItem.scss';
import '../../../styles/styleguide/headings.scss';

interface TransactionListItemProps {
  merchant: string;
  date: string;
  amount: string;
  type: string;
  isCredit?: boolean;
}

function TransactionListItem({ merchant, date, amount, type, isCredit = false }: TransactionListItemProps) {
  const sign = isCredit ? '+' : '-';
  const displayAmount = `${sign} ${amount}`;
  
  return (
    <div className="transaction__items">
      <div className="transaction__items-logo">
        <i className="icon-file-storage logo"></i>
      </div>
      <div className="transaction__items-details">
        <div className="title">{merchant}</div>
        <div className="date">{date}</div>
        <div className="action">
          <i className="icon-business-and-finance"></i>{type}
        </div>
      </div>
      <div className="transaction__items-price">
        <div className="price">{displayAmount}</div>
        <i className="icon-next" style={{ fontStyle: 'normal', display: 'inline-block' }}></i>
      </div>
    </div>
  );
}

export default TransactionListItem;

