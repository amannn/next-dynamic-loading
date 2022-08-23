import dynamic from 'next/dynamic';
import {Suspense} from 'react';

const Dynamic = dynamic(() => import('../components/Dynamic'), {
  suspense: true
});

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
