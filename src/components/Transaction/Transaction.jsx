
import React from 'react'

const Transaction = ({ transaction }) => {

  return (
    <div className="wallet__slider-body">
      <div className="wallet__slider-wrapper">
        <p className="wallet__slider-title">{transaction.type}</p>
        <p className="wallet__slider-date">{transaction.creationTime}</p>
      </div>
      <p className="wallet__slider-count">{transaction.amount}</p>
    </div>
  )
}

export default Transaction
