import React from 'react'
import { Switch, Link, Route } from 'react-router-dom';
import Formik from './Formik'

import { AntdC } from './Antd';


const index = () => {
  return (
    <div>
      <h2>Library</h2>
      <div>
        <Link to="/library/formik">Formik</Link>
        <Link to="/library/antd">Antd</Link>
      </div>
      <Switch>
        <Route path="/library/formik">
          <Formik />
        </Route>
        <Route path="/library/antd">
          <AntdC />
        </Route>
      </Switch>
    </div>
  )
}

export default index
