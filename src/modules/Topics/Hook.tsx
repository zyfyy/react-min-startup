import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
  useDebugValue,
  Dispatch,
  FC,
  ReactNode
} from 'react';



import { ThemeContext } from '../../context/theme-context';

// useReducer 是useState的替代方案，某些情况下，useState更方便
type ReducerState = {
  count: number
}
type ReducerAction = {
  type: 'increment' | 'decrement'
}

const initialState = {
  count: 0,
};

function reducer(state: ReducerState, action: ReducerAction) {
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
type HrProps = {
  title: String,
  children: ReactNode
}
const Hr: FC<HrProps> = (props) => {
  return (
    <div>
      <h5 style={{ margin: 0, color: 'blue' }}>{props.title}:</h5>
      {props.children}
      <hr />
    </div>
  );
};


// child counter
const Counter = ({ dispatch } : {dispatch: Dispatch<ReducerAction>}) => {
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};

const Hook = () => {
  // useState
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // useEffect  每轮渲染结束后执行
  useEffect(() => {
    document.title = `click ${count} times`;
    // side effect
    // setTimeout(() => {setCount(count + 1);}, 1000);
  }, [count]);

  // useContext
  const theme = useContext(ThemeContext);

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback
  const handlerClick2 = useCallback(() => {
    // console.log(Math.floor(count2 / 5));
    setCount2(count2 + 1);
  }, [Math.floor(count2 / 5)]);

  // useMemo
  const num = useMemo(() => {
    let num = 0;
    // 这里使用 count 针对 num 做一些很复杂的计算，当 count 没改变的时候，组件重新渲染就会直接返回之前缓存的值。
    return num;
  }, [count3]);

  // useRef
  const inputEl = useRef<HTMLInputElement>(null);
  const refOnClick = () => {
    inputEl?.current?.focus();
  };

  // usecallback with ref
  const [width, setWidth] = useState(0);
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  // useLayoutEffect  变更之后同步调用，在useEffect之前
  useLayoutEffect(() => {}, [count]);
  // useDebugValue
  const isDebug = useTestDebug();

  return (
    <div>
      <Hr title="useState & useEffect">
        <div>
          topick {count}{' '}
          <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
      </Hr>

      <Hr title="context">
        <ThemeContext.Provider value={theme}>
          <div
            className="context"
            style={{
              background: theme.background,
              color: theme.foreground,
            }}
          >
            theme color
          </div>
        </ThemeContext.Provider>
      </Hr>

      <Hr title="reducer">
        <div className="reducer">
          Count: {state.count}
          <Counter dispatch={dispatch} />
        </div>
      </Hr>

      <Hr title="useCallback">
        <div className="callback">
          topick {count2} <button onClick={handlerClick2}>click me</button>
        </div>
      </Hr>

      <Hr title="useMemo">
        <div className="useMemo"></div>
      </Hr>

      <Hr title="ref">
        <div className="ref">
          <input type="text" ref={inputEl} />
          <button onClick={refOnClick}>ref click</button>
        </div>
      </Hr>

      <Hr title="ref with use callback">
        <div className="ref" ref={measuredRef}>
          <p>{width}</p>
          {/* <button onClick={refOnClick}>ref click</button> */}
        </div>
      </Hr>

      <div>isDebug: {isDebug}</div>
    </div>
  );
};

export default Hook;
