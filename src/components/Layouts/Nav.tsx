import React, { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.less';


export interface NavRouteType {
  path: string,
  title: string,
  exact?: boolean,
  component: ReactNode
}

interface NavRouteProps {
  routes: NavRouteType[]
}

const Nav: FC<NavRouteProps> = ({ routes }) => {
  // console.log(styles);
  return (
    <nav className={styles.nav}>
      <ol className={styles.crumbs}>
        {
          routes.map((route: NavRouteType, idx: number) => (
            <li key={idx} className={styles.crumb}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))
        }
      </ol>
    </nav>
  )
}

export default Nav;
