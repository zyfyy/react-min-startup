import React, { Component, ComponentType } from 'react';

const withDidUpdateLog = <P extends object>(Component: ComponentType<P>) => {
  class logProps extends React.Component {
    componentDidUpdate(prevProps: {}) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }

    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      const { ...props } = this.props;
      return (
        <div>
          hoc ability withDidUpdateLog
          <Component {...props as P} />
        </div>
      );
    }
  }

  return logProps;
}

class HOC extends Component {
  render() {
    return <div>hoc wrappedComponent</div>;
  }
}

export default withDidUpdateLog(HOC);
