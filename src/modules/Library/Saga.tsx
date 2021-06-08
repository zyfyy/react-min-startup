import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '@/reducers';
import { increase } from '@/actions/saga';

const mapDispatchToProps = { increase };
const mapStateToProps = (state: RootState) => {
  const { saga } = state;
  return saga;
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type SagaPropsTypes = ConnectedProps<typeof connector>;

const Saga = (props: SagaPropsTypes) => {
  return (
    <div>
      <button onClick={props.increase}>click to increase async use saga with saga</button>

      <pre>
        <br />
        {props.count}
      </pre>
    </div>
  );
};

export default connector(Saga);
