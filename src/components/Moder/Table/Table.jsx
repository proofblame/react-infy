import React from 'react'
import constants from '../constants.js'
import './Table.scss'
import Complaint from '../Complaint/Complaint'

const Table = ({ onOpen, complaintsList }) => {
  const { table } = constants;
  const { filter, body } = table;


  const ComplaintList = complaintsList.map((complaint) => (
    <Complaint
      key={complaint.id}
      onOpen={onOpen}
      complaint={complaint}
    />
  ))

  return (
    <section className="moderation__table">

      <div className="moderation__table-header">

        <div className="moderation__table-filter">
          <p className="moderation__table-filter-title">{filter.title}</p>
          <ul className="moderation__table-filter-params">
            <li className="moderation__table-filter-param moderation__table-filter-param_selected">
              <button type="button" className="moderation__table-filter-button">
                {filter.paramDate}
              </button>
            </li>
            <li className="moderation__table-filter-param">
              <div className="moderation__table-filter-status">
                <p className="moderation__table-filter-subtitle">{filter.paramStatus}</p>
                <select className="moderation__table-filter-select">
                  <option>Открыта</option>
                  <option>Закрыта</option>
                </select>
              </div>
            </li>
          </ul>
        </div>

        <div className="pagination pagination_top">
          <button type="button" className="pagination__arrow pagination__arrow_previos"></button>
          <ul className="pagination__list">
            <li className="pagination__page pagination__page_current">
              <button className="pagination__page-button">
                1
              </button>
            </li>
            <li className="pagination__page">
              <button className="pagination__page-button">
                2
              </button>
            </li>
            <li className="pagination__page">
              <button className="pagination__page-button">
                3
              </button>
            </li>
          </ul>
          <button type="button" className="pagination__arrow"></button>
        </div>

      </div>

      <div className="moderation__table-body">

        <ul className="moderation__table-subtitle-row">
          <li className="moderation__table-subtitle-cell">{body.date}</li>
          <li className="moderation__table-subtitle-cell">{body.number}</li>
          <li className="moderation__table-subtitle-cell">{body.nickname}</li>
          <li className="moderation__table-subtitle-cell">{body.status}</li>
        </ul>

        {ComplaintList}

      </div>

      <div className="moderation__table-pagination pagination pagination_dark">
        <button type="button" className="pagination__arrow pagination__arrow_previos"></button>
        <ul className="pagination__list">
          <li className="pagination__page pagination__page_current">
            <button className="pagination__page-button">
              1
            </button>
          </li>
          <li className="pagination__page">
            <button className="pagination__page-button">
              2
            </button>
          </li>
          <li className="pagination__page">
            <button className="pagination__page-button">
              3
            </button>
          </li>
        </ul>
        <button type="button" className="pagination__arrow"></button>
      </div>

    </section>

  )
}

export default Table
