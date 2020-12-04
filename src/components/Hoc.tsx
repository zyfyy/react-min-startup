import React, {Component} from 'react';

function logProps(WrappedComponent: Component<{}, {}>): Component<{}, {}> {
  class logProps extends React.Component {
    componentDidUpdate(prevProps: {}) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }

    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return (
        <div>
          hoc ability
          <WrappedComponent {...this.props} />
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

export default logProps(HOC);
