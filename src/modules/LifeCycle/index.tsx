import React, { useState, useEffect } from 'react';
import Cycle from './Cycle';
import Fun from './Fun';

const INTERVAL = 1000 * 10;
const LifeCycle = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1);
    }, INTERVAL);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>INTERVAL: {INTERVAL}</h1>
      <Cycle count={count} />
      <Fun count={count} name="fun:sports" />
    </div>
  );
};

export default LifeCycle;
