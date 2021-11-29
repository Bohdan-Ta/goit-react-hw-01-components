import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <tr>
            <td className={s.td}>{transaction.type}</td>
            <td className={s.td}>{transaction.amount}</td>
            <td className={s.td}>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propType = {
  transaction: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
