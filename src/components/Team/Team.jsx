import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import sprite from '../../images/icons/icons.svg'
import './Team.css'
import Summary from '../Summary/Summary'
import Tree from '../Tree/Tree'

function Team({ currentUser, currentTeam, checkToken }) {
  useEffect(() => {
    document.title = "Team"
  }, []);
  return (

    <main className="main">
      <div className="container">
        <Nav />

        <section className="main__profile profile">
          <div className="profile__body">
            <h1 className="profile__title title">Команда</h1>
            <div className="profile__data data">
              <div className="data__user">
                <div className="data__avatar">
                  <picture>
                    <source srcSet={sprite + "#profile-bot"} type="image/webp" /><img
                      src={sprite + "#profile-bot"} alt="Avatar" />
                  </picture> <button className="data__edit-avatar-button"></button>
                </div>
                <div className="data__contacts">
                  <div className="data__contacts-body">
                    <div className="data__contacts-block">
                      <p className="data__nickname text text_size_large text_color_normal">{currentUser.nickname}</p>
                    </div>
                    <div className="data__contacts-block">
                      <p className="data__status text text_color_normal">{currentUser.status}</p>
                    </div>
                    <div className="data__contacts-block">
                      <p className="data__progress-status text text_size_x-small text_color_lighter">{currentUser.status} выполнен на <span
                        className="data__progress-count">0%</span> </p> <progress className="data__progress-scale" max="100"
                          value="0"> Загружено на <span id="value">25</span>% </progress>
                    </div>
                    <div className="data__contacts-block">
                      <p className="data__status-active text text_size_x-small text_color_lighter">Активен</p>
                      <p className="data__status-active text text_size_x-small text_color_lighter">Вас пригласил: {currentUser.joinedBy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="data__contacts"> </div>
            </div>
          </div>
        </section>
        <Summary currentTeam={currentTeam} />
        <Tree checkToken={checkToken} />
      </div>
    </main>


  )
}

export default Team
