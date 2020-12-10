import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
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

const Virtualized = () => {
  return (
    <>
      {list.map((item) => (
        <div key={item.id} className="row">
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="content">
            <div>{item.name}</div>
            <div>{item.text}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Virtualized;
