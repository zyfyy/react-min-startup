import React, {memo, useState, useEffect} from 'react';

const A = (props) => {
  useEffect(() => {
  });
  return <div>A</div>;
};

const B = memo((props) => {
  useEffect(() => {
  });
  return <div>B</div>;
});

const Home = (props) => {
  const [a, setA] = useState(0);
  useEffect(() => {
    setA(1);
  }, []);
  return (
    <div>
      <A n={a} />
      <B />
    </div>
  );
};
