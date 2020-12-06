import React, { Suspense, lazy, FC } from 'react';

const Lazy = lazy(() => import('./Lazy'));

const Footer: FC = () => (
  <div style={{marginTop: '20px', borderTop: '3px solid #666'}}>
    <Suspense fallback={<h1>Footer Still Loading…</h1>}>
      <Lazy />
    </Suspense>
  </div>
)

export default Footer;