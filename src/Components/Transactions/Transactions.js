import PropTypes from "prop-types";
import s from "./transaction.module.css";

const TransactionHistory = ({ transactionData }) => {
  return (
    <table className={s.transaction__history}>
      <thead className={s.table__head}>
        <tr className={s.table__row}>
          <th key="Type">Type</th>
          <th key="Amount">Amount</th>
          <th key="Currency">Currency</th>
        </tr>
      </thead>
      <tbody className={s.table__body}>
        {transactionData.map((withdraw) => {
          return (
            <tr key={withdraw.id} className={s.table__body_row}>
              <td key={`${withdraw.id} + '${withdraw.type}`}>{withdraw.type}</td>
              <td key={`${withdraw.id} + '${withdraw.amount}`}>{withdraw.amount}</td>
              <td key={`${withdraw.id} + '${withdraw.currency}`}>{withdraw.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: +PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
