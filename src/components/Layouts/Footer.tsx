import React, { Suspense, lazy, FC, useState, useEffect } from 'react';

const Lazy = lazy(() => import('./Lazy'));

import { initalType } from './Lazy';

const Footer: FC = () => {
  const [inital, setInital] = useState<initalType | null>(null);
  useEffect(() => {
    Promise.resolve({ code: 0, data: { title: 'title' } }).then((data) => {
      setInital(data.data);
    });
  }, []);
  return (
    <div style={{ marginTop: '20px', borderTop: '3px solid #666' }}>
      <Suspense fallback={<h1>Footer Still Loading…</h1>}>
        <Lazy data={inital} />
      </Suspense>
    </div>
  );
};

export default Footer;
