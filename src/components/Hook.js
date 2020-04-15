import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useRef,
  useLayoutEffect,
  useDebugValue,
} from 'react';

import {ThemeContext} from '../context';

// useReducer 是useState的替代方案，某些情况下，useState更方便
const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
}

// 自定义Hook
function useTestDebug() {
  const [isDebug] = useState(null);

  useDebugValue(isDebug ? 'dddebugggg-string' : 'oooommmgg');
  return isDebug;
}

const Hook = () => {
  // useState
  const [count, setCount] = useState(0);

  // useEffect  每轮渲染结束后执行
  useEffect(() => {
    document.title = `you click button ${count} times`;
    // side effect
    // setTimeout(() => {setCount(count + 1);}, 1000);
  }, [count]);

  // useContext
  const theme = useContext(ThemeContext);

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback
  // useMemo

  // useRef
  const inputEl = useRef(null);
  const refOnClick = () => {
    inputEl.current.focus();
  };

  // useLayoutEffect  变更之后同步调用，在useEffect之前
  useLayoutEffect(() => {}, [count]);
  // useDebugValue
  const isDebug = useTestDebug();

  return (
    <div>
      <div>topick {count}</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <div
        className="context"
        style={{background: theme.background, color: theme.foreground}}
      >
        theme color
      </div>
      <div className="reducer">
        Count: {state.count}
        <button
          onClick={() =>
            dispatch({
              type: 'decrement',
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'increment',
            })
          }
        >
          +
        </button>
      </div>
      <div className="callback">{}</div>

      <div className="ref">
        <input type="text" ref={inputEl} />
        <button onClick={refOnClick}>ref click</button>
      </div>
      <div>isDebug: {isDebug}</div>
    </div>
  );
};

export default Hook;
