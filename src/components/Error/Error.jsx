import React, { useEffect } from 'react'
import nlo from '../../images/nlo.png'

function Error({ title }) {
  useEffect(() => {
    document.title = "Error"
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="wrapper">



          <section className="banner">
            <div className="banner__wrapper banner__wrapper_type_two-columns">
              <div className="wrapper profile__body">
                <h1 className="banner__title title">{title ? title : 'Oops...'}
                </h1>
                <h1 className="banner__title title " style={{ color: "rgba(36, 36, 36, 0.58)" }}>{title ? title : 'Oops...'}</h1>

                <div className="wrapper">
                  <div className="image image_type_mobile">
                    <picture>
                      <img src={nlo}
                        alt="Error" />
                    </picture>
                  </div>
                </div>

              </div>
              <div className="wrapper">
                <div className="image image_type_desktop">
                  <picture>
                    <img src={nlo}
                      alt="Делегируй монеты со своего устройства и начни зарабатывать уже через 24 часа!" />
                  </picture>
                </div>

              </div>
            </div>

          </section>

        </div>
      </div>
    </main>
  )
}

export default Error
