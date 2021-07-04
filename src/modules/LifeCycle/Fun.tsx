/* eslint-disable no-console */
import React, { ReactElement, useEffect, useState } from 'react';

export interface FunProps {
  count: number;
  name: string;
}

export default function Fun(props: FunProps): ReactElement | null {
  const [sports] = useState<string[]>([]);
  useEffect(() => {
    console.log('effect1');
  }, []);

  useEffect(() => {
    console.log('effect2');
    console.log('');
  }, [props.count]);

  return (
    <div>
      <h2>Have Fun! {props.name}</h2>
      <h5>Sports {props.count}</h5>
      {sports.map(item => (
        <li key={item}>item</li>
      ))}
    </div>
  );
}
