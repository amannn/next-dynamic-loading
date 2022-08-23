import {lazy, Suspense} from 'react';

const Dynamic = lazy(() => import('../components/Dynamic'));

export default function Home() {
  return (
    <Suspense>
      <div>
        <p>Static text</p>
        <Dynamic />
      </div>
    </Suspense>
  );
}
