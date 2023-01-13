import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, expensesAmount, incomeAmount} = props
  return (
    <div className="money-details-container">
      <div className="balance-card total">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="image"
        />
        <div className="wallet-details">
          <p className="balance">Your Balance</p>
          <p
            className="amount"
            data-testid="balanceAmount"
          >{`Rs ${balanceAmount}`}</p>
        </div>
      </div>
      <div className="balance-card income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="image"
        />
        <div className="wallet-details">
          <p className="balance">Your Income</p>
          <p
            className="amount"
            data-testid="incomeAmount"
          >{`Rs ${incomeAmount}`}</p>
        </div>
      </div>
      <div className="balance-card expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="wallet-details">
          <p className="balance">Your Expenses</p>
          <p
            className="amount"
            data-testid="expensesAmount"
          >{`Rs ${expensesAmount}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
