import React, { ReactElement } from 'react';
import { useSearchParam } from 'react-use';

// export interface ReactUseReactUseProps {}

const Demo = () => {
  const edit = useSearchParam('edit');

  return (
    <div>
      <div>edit: {edit || '🤷'}</div>
      <div>
        <button onClick={() => history.pushState({}, '', location.pathname + '?edit=123')}>
          Edit post 123 (?edit=123)
        </button>
      </div>
      <div>
        <button onClick={() => history.pushState({}, '', location.pathname + '?edit=999')}>
          Edit post 999 (?edit=999)
        </button>
      </div>
      <div>
        <button onClick={() => history.pushState({}, '', location.pathname)}>Close modal</button>
      </div>
    </div>
  );
};

export default function ReactUse(): ReactElement {
  return (
    <>
      <Demo />
    </>
  );
}
