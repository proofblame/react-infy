import React from 'react'
import './Complaint.scss'

const Complaint = ({ onOpen, complaint }) => {
  return (
    <ul className="moderation__table-subtitle-row" onClick={() => onOpen(complaint)}>
      <li className="moderation__table-subtitle-cell">{complaint.date}</li>
      <li className="moderation__table-subtitle-cell">{complaint.id}</li>
      <li className="moderation__table-subtitle-cell">{complaint.owner}</li>
      <li className="moderation__table-subtitle-cell">{complaint.status}</li>
    </ul>
  )
}

export default Complaint
