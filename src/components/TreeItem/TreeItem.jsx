import React from 'react'
import sprite from "../../images/icons/icons.svg";

const TreeItem = ({treeItem}) => {
  return (
    <div className="tree__popup-card ">
    <p className="tree__popup-title">Пригласил YOTON</p>
    <div className="tree__popup-body">
      <div className="tree__popup-img">
        <img src={sprite + "#profile-bot"} alt="" />
      </div>
      <div className="tree__popup-wrapper">
        <p className="tree__popup-name">SONYA</p>
        <p className="tree__popup-status">Не активирован</p>
      </div>
      <div className="tree__popup-wrapper">
        <p className="tree__popup-user">USER</p>
        <p className="tree__popup-partner">
          PARTNER <span className="tree__popup-partner-status"></span>
          Выполнено на
          <span>70%</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default TreeItem
