import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const onDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="transaction-list">
      <p className="item">{title}</p>
      <p className="item">{`Rs ${amount}`}</p>
      <p className="item">{type}</p>
      <button
        type="button"
        className="delete-btn item"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
