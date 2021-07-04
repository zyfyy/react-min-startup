/* eslint-disable no-console */
import React, { Component } from 'react';

export interface CycleProps {
  count: number;
}

export interface CycleState {}

export default class Cycle extends Component<CycleProps, CycleState> {
  static getDerivedStateFromProps(nextProps: CycleProps, prevState: CycleState) {
    console.log('before render', nextProps, prevState);
    // Return null to indicate no change to state.
    return null;
  }

  constructor(props: CycleProps) {
    super(props);
    console.log('inited');
    this.state = {};
  }

  componentDidMount() {
    console.log('didMount');
    this.setState({ a: 'xx' });
    setTimeout(() => {
      this.setState({ a: 'bbb' });
    }, 1000);
  }

  componentDidCatch() {}

  componentDidUpdate(preState: CycleState, prePorp: CycleProps) {
    console.log('didupate', preState, prePorp);
    console.log('');
  }

  componentWillUnmount() {}

  shouldComponentUpdate(next: CycleProps, pre: CycleProps) {
    console.log('should?', next, pre);
    return true;
  }

  render() {
    console.log('render');
    return (
      <div className="class-component">
        <h1>Hello ClassComponent</h1>
      </div>
    );
  }
}
