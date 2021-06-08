import React, { Component } from 'react';

import SubPage, { SubPageRouteType } from '../../components/SubPage';

import Hook from './Hook';
import Hoc from './Hoc';
import Ref from './Ref';
import Context from './Context';
import Memo from './Memo';

const topicRoutes: SubPageRouteType[] = [
  {
    path: '/basics/hook',
    title: 'Hook',
    component: <Hook />,
  },
  {
    path: '/basics/hoc',
    title: 'Hoc',
    component: <Hoc />,
  },
  {
    path: '/basics/ref',
    title: 'Ref',
    component: <Ref />,
  },
  {
    path: '/basics/context',
    title: 'Context',
    component: <Context />,
  },
  {
    path: '/basics/Memo',
    title: 'Memo',
    component: <Memo />,
  },
];

export default class Basics extends Component {
  render() {
    return <SubPage routes={topicRoutes} title="Basics" />;
  }
}
