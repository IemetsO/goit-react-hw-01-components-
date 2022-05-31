import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.ceil}>{type}</td>
      <td className={s.ceil}>{amount}</td>
      <td className={s.ceil}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
