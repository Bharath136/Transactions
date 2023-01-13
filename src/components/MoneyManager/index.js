import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {amountInput: '', titleInput: '', typeInput: '', transactionsList: []}

  onAddTransaction = event => {
    event.preventDefault()

    const {amountInput, titleInput, typeInput, transactionsList} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.displayText === typeInput,
    )

    console.log(typeOption)

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeOption.displayText,
    }

    // if (titleInput !== '' && amountInput !== '') {
    this.setState({
      transactionsList: [...transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].displayText,
    })
    // }
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredTransactionList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionsList: [...filteredTransactionList]})
  }

  render() {
    const {transactionsList, titleInput, amountInput, typeInput} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()

    return (
      <div className="container">
        <div className="cards-container">
          <div className="money-manager-card">
            <h1 className="money-manager">Hi, Rechard</h1>
            <p className="message">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="forms-container">
            <div className="form-container">
              <form className="form" onSubmit={this.onAddTransaction}>
                <h1 className="heading">Add Transaction</h1>
                <div className="input-container">
                  <label className="label" htmlFor="label">
                    TITLE
                  </label>
                  <input
                    type="text"
                    id="label"
                    placeholder="TITLE"
                    value={titleInput}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="label">
                    AMOUNT
                  </label>
                  <input
                    type="text"
                    id="label"
                    placeholder="AMOUNT"
                    value={amountInput}
                    onChange={this.onChangeAmount}
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="type">
                    TYPE
                  </label>
                  <select
                    className="select"
                    id="type"
                    value={typeInput}
                    onChange={this.onChangeType}
                  >
                    {transactionTypeOptions.map(eachOption => (
                      <option
                        value={eachOption.displayText}
                        key={eachOption.optionId}
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-table-container">
              <h1 className="heading">History</h1>
              <ul className="history-container">
                <li className="header-list">
                  <p className="head">Title</p>
                  <p className="head">Amount</p>
                  <p className="head">Type</p>
                  <p className="head">{}</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
