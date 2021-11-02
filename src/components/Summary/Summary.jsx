import React from 'react'
import './Summary.css'

const Summary = () => {
  return (
    <section className="summary">
    <div className="summary__wrapper">
      <p className="summary__title"> Участников (активировано) </p>
      <p className="summary__statistics"> teamCount<span className="summary__statistics_common">(teamCount)</span>
      </p>
    </div>
    <div className="summary__wrapper">
      <p className="summary__title"> Объём монет в команде </p>
      <p className="summary__statistics"> commandBalance </p>
    </div>
    <div className="summary__wrapper">
      <p className="summary__title"> Делегировано командой </p>
      <p className="summary__statistics"> commandDelegateBalance </p>
    </div>
  </section>
  )
}

export default Summary
