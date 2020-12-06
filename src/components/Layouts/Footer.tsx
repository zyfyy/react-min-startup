import React, { Suspense, lazy, FC } from 'react';

const Lazy = lazy(() => import('./Lazy'));

const Footer: FC = () => (
  <Suspense fallback={<h1>Footer Still Loading…</h1>}>
    <Lazy />
  </Suspense>
)

export default Footer;