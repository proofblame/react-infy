import React from 'react'
import { Route } from "react-router-dom";
import loading from '../../images/anim.gif'

const MainRoute = (props) => {
  return (
    <Route>
      {() => (props.isChecked ? props.children :
        <div className="container">
          <img srcSet={loading} alt="" style={{ maxWidth: '100px' }} />
        </div>


      )}
    </Route>
  )
}

export default MainRoute
