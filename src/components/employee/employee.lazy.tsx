import React, { lazy, Suspense } from 'react';

const Lazyemployee = lazy(() => import('./employee'));

const employee = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazyemployee {...props} />
  </Suspense>
);

export default employee;
