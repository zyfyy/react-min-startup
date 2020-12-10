import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import {
  List,
  AutoSizer,
  Size,
  ListRowRenderer,
} from 'react-virtualized';
import './Virtualized.css';

type rowItem = {
  id: number;
  name: string;
  image: string;
  text: string;
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1,
  },
  wordsPerSentence: {
    max: 18,
    min: 1,
  },
});

const rowCount = 1000;
const list = Array<rowItem | null>(rowCount)
  .fill(null)
  .map((v, idx) => {
    return {
      id: idx,
      name: [lorem.generateWords(1), lorem.generateWords(1)]
        .map((word) => word.replace(/^\S/, (s) => s.toUpperCase()))
        .join(' '),
      image: 'http://via.placeholder.com/40',
      text: lorem.generateParagraphs(1),
    };
  });

const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

const renderer: ListRowRenderer = ({ index, key, style }) => {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{list[index].name}</div>
        <div>{list[index].text}</div>
      </div>
    </div>
  );
};

const Content = ({ width, height }: Size) => {
  return (
    <List
      width={width}
      height={height}
      rowHeight={rowHeight}
      rowRenderer={renderer}
      rowCount={list.length}
      overscanRowCount={3}
    />
  );
};

const Virtualized = () => {
  return (
    <div className="list">
      <AutoSizer>{Content}</AutoSizer>
    </div>
  );
};

export default Virtualized;
