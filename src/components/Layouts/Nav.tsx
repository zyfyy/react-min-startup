import React, { Component, FC } from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.less';


export interface NavRouteType {
  path: string,
  text: string,
  component: Component
}

interface NavRouteProps {
  routes: NavRouteType[]
}

const Nav: FC<NavRouteProps> = ({ routes }) => {
  console.log(styles);
  return (
    <nav className={styles.nav}>
      <ol className={styles.crumbs}>
        {
          routes.map((route: NavRouteType, idx: number) => (
            <li key={idx} className={styles.crumb}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          ))
        }
      </ol>
    </nav>
  )
}

export default Nav;
