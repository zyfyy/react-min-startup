import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
  memo
} from 'react';

import PropTypes from 'prop-types';

const Child = () => {
  console.log('子组件?');
  return (
    <div>我是一个子组件</div>
  );
};
const ChildMemo = memo(Child);

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>加1</button>
      <p>count:{count}</p>
      <Child />
    </>
  );
};


const Page2 = () => {
  const [count, setCount] = useState(0);
  // 没有属性传入子组件，子组件不重新渲染
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>加1</button>
      <p>count:{count}</p>
      <ChildMemo />
    </>
  );
};



//子组件会有不必要渲染的例子
const Child2 = ({ name, onClick }) => {
  console.log('子组件?');
  return (
    <>
      <div>我是一个子组件，父级传过来的数据：{name}</div>
      <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
    </>
  );
};
const ChildMemo2 = memo(Child2);

const Page3 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child组件');

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>加1</button>
      <p>count:{count}</p>
      <ChildMemo2 name={name} onClick={newName => setName(newName)} />
    </>
  );
};

const Page4 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child组件');

  return (
    <>
      <button onClick={() => { setCount(count+1) }}>加1</button>
      <p>count:{count}</p>
      <ChildMemo2 name={name} onClick={ useCallback(newName => setName(newName), []) }/>
      {/* useCallback((newName: string) => setName(newName),[]) */}
      {/* 这里使用了useCallback优化了传递给子组件的函数，只初始化一次这个函数，下次不产生新的函数 */}
    </>
  );
};


const Child3 = ({ name, onClick }) => {
  console.log('子组件?');
  return(
    <>
      <div style={{ color: name.color }}>我是一个子组件，父级传过来的数据：{name.name}</div>
      <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
    </>
  );
};

const ChildMemo3 = memo(Child3);

const Page5 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child组件');
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>加1</button>
      <p>count:{count}</p>
      <ChildMemo3
        name={{ name, color: name.indexOf('name') !== -1 ? 'red' : 'green' }}
        onClick={useCallback(newName => setName(newName), [])}
      />
    </>
  );
};


const Page6 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child组件');
  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>加1</button>
      <p>count:{count}</p>
      <ChildMemo3
        name={
          useMemo(()=>({
            name,
            color: name.indexOf('name') !== -1 ? 'red' : 'green'
          }), [name])
        }
        onClick={useCallback(newName => setName(newName), [])}
      />
    </>
  );
};

const Memo = () => {
  return <div>
    <Page />
    <hr />
    <Page2 />
    <hr />
    <Page3 />
    <hr />
    <Page4 />
    <hr />
    <Page5 />
    <hr />
    <Page6 />
    <hr />
  </div>;
};

export default Memo;
