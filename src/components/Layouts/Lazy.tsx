import React, { Component } from 'react';
export type initalType = {
  title: string;
};
type LazyProps = {
  data: initalType | null;
};

export default class Lazy extends Component<LazyProps> {
  constructor(props: LazyProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        Lazy loaded Footer component
      </div>
    );
  }
}
