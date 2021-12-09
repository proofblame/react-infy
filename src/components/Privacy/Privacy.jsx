import React, { useEffect } from 'react'

function Privacy() {
  useEffect(() => {
    document.title = "Privacy"
  }, []);
  return (
    <main className="main">
      <div className="container">
        <section className="main__profile profile">
          <h1 className="profile__title title">Пользовательское соглашение</h1>

          <p className="text terms terms__text">
            Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем infy-corp.com (далее Infinity Corporation или Администрация) с одной стороны и пользователем сайта с другой. <br />
            Сайт Infinity Corporation не является средством массовой информации.
          </p>
          <br />
          <p className="text terms terms__text">
            Используя сайт, Вы соглашаетесь с условиями данного соглашения. <br />
            <b>Если Вы не согласны с условиями данного соглашения, не используйте сайт Infinity Corporation!</b>
          </p>
          <br />
          <br />
          <p className="text terms terms__text text_size_large">
            <b>Права и обязанности сторон</b>
          </p>
          <br />
          <p className="text terms terms__text">
            <b>Пользователь имеет право:</b>
          </p>
          <p className="text terms terms__text">
            - осуществлять поиск информации на сайте
          </p>
          <p className="text terms terms__text">
            - получать информацию на сайте
          </p>
          <p className="text terms terms__text">
            - распространять информацию на сайте
          </p>
          <p className="text terms terms__text">
            - изменять рейтинг пользователей
          </p>
          <p className="text terms terms__text">
            - копировать информацию на другие сайты с указанием источника
          </p>
          <p className="text terms terms__text">
            - использовать информацию сайта в личных некоммерческих целях
          </p>
          <br />

          <p className="text terms terms__text">
            <b>Администрация имеет право:</b>
          </p>
          <p className="text terms terms__text">
            - по своему усмотрению и необходимости создавать, изменять, отменять правила
          </p>
          <p className="text terms terms__text">
            - ограничивать доступ к любой информации на сайте
          </p>
          <p className="text terms terms__text">
            - создавать, изменять, удалять информацию
          </p>
          <p className="text terms terms__text">
            - удалять учетные записи
          </p>
          <p className="text terms terms__text">
            - отказывать в регистрации без объяснения причин
          </p>
          <br />

          <p className="text terms terms__text">
            <b>Пользователь обязуется:</b>
          </p>
          <p className="text terms terms__text">
            - обеспечивать сохранность личных данных от доступа третьих лиц
          </p>
          <p className="text terms terms__text">
            - не нарушать работоспособность сайта
          </p>
          <p className="text terms terms__text">
            - не совершать действия, направленные на введение других Пользователей в заблуждение
          </p>
          <p className="text terms terms__text">
            - не передавать в пользование свою учетную запись и/или логин и пароль своей учетной записи третьим лицам
          </p>
          <p className="text terms terms__text">
            - не регистрировать учетную запись от имени или вместо другого лица за исключением случаев, предусмотренных законодательством РФ
          </p>
          <p className="text terms terms__text">
            - не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение которой запрещено или противоречит нормам действующего законодательства РФ
          </p>
          <p className="text terms terms__text">
            - не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами
          </p>
          <br />

          <p className="text terms terms__text">
            <b>Администрация обязуется:</b>
          </p>
          <p className="text terms terms__text">
            - поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.
          </p>
          <p className="text terms terms__text">
            - осуществлять разностороннюю защиту учетной записи Пользователя
          </p>
          <p className="text terms terms__text">
            - защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной записи пользователя, нарушившего правила
          </p>
          <p className="text terms terms__text">
            - предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом
          </p>
          <br />
          <br />
          <p className="text terms terms__text text_size_large">
            <b>Ответственность сторон</b>
          </p>
          <br />
          <p className="text terms terms__text">
            - пользователь лично несет полную ответственность за распространяемую им информацию
          </p>
          <p className="text terms terms__text">
            - администрация не несет никакой ответственности за достоверность информации, скопированной из других источников
          </p>
          <p className="text terms terms__text">
            - администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг
          </p>
          <p className="text terms terms__text">
            - администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами
          </p>
          <p className="text terms terms__text">
            - в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса
          </p>
          <br />
          <br />
          <p className="text terms terms__text text_size_large">
            <b>Условия действия Соглашения</b>
          </p>
          <br />
          <p className="text terms terms__text">
            Данное Соглашение вступает в силу при регистрации на сайте.
          </p>
          <p className="text terms terms__text">
            Соглашение перестает действовать при появлении его новой версии.
          </p>
          <p className="text terms terms__text">
            Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.
          </p>
          <p className="text terms terms__text">
            При изменении соглашения, в некоторых случаях, администрация может оповестить пользователей удобным для нее способом.
          </p>




        </section>
      </div>
    </main>
  )
}

export default Privacy
