import PropTypes from "prop-types"
import TransactionItem from "./TransactionItem"

function TransactionHistory ({items}) {
    return (<table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
        </thead>
              <tbody>
            {items.map(item =>
            <TransactionItem 
              key={item.id}
            type={item.type}
            amount={item.amount}
            currency = {item.currency}
          />)}
         </tbody>
      </table>
    )
}

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory