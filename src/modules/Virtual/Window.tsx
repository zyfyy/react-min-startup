import React from 'react';
import { FixedSizeList as List } from 'react-window';

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

const Row = ({ index, style }: RowProps) => <div style={style}>Row {index}</div>;

const Example = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);

export default Example;
