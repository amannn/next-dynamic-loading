import {useEffect} from 'react';

export default function Dynamic() {
  performance.mark('[Dynamic] render start');

  useEffect(() => {
    performance.mark('[Dynamic] render end');
    performance.measure(
      '[Dynamic] render',
      '[Dynamic] render start',
      '[Dynamic] render end'
    );
  }, []);

  return <p>Dynamic text</p>;
}
