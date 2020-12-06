import React, { ReactNode } from 'react'
import { Switch, Link, Route } from 'react-router-dom'

import styles from './SubPage.module.css';

export interface SubPageRouteType {
  path: string,
  title: string,
  exact?: boolean,
  component: ReactNode
}

interface SubPageRouteProps {
  routes: SubPageRouteType[]
}

const SubPage = (props: SubPageRouteProps) => {
  const { routes } = props;
  return (
    <div>
      <div className={styles['topicslink']}>
        {
          routes.map((route, idx) => (
            <Link key={idx} to={route.path}>{route.title}</Link>
          ))
        }
      </div>

      <div>
        <Switch>
          {
            routes.map((route, idx) => (
              <Route
                key={idx}
                exact={route.exact}
                path={route.path}
                component={
                  () => <>{route.component}</>
                }
              />
            ))
          }
        </Switch>
      </div>
    </div >
  )
}

export default SubPage
