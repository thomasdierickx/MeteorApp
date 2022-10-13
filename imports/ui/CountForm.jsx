import React, { useState } from 'react';
import { LinksCollection } from '/imports/api/Collection';

export const CountForm = ({ numbers, left, right }) => {
    const [number, setNumber] = useState(0.5);

    let leftNumber = numbers.collection[0].countLeft;
    let rightNumber = numbers.collection[0].countRight;
    let _id = numbers.collection[0]._id;

    const handleSubmit = e => {
    e.preventDefault();

    if (left === true) {
        LinksCollection.update(_id, {
            $set: {
              countLeft: leftNumber + 0.5,
              countRight: rightNumber - 0.5,
            }
        })
    }
    if (right === true) {
        LinksCollection.update(_id, {
            $set: {
              countLeft: leftNumber - 0.5,
              countRight: rightNumber + 0.5,
            }
        })
    }
    setNumber();
  };

    return (
        <form className="count--form" onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder={number}
              value={0.5}
              className="count--form__number"
              onChange={(e) => setNumber(e.target.value)}
            />

            <button type="submit" className="btnWin">Tap to win</button>
        </form>
    );
};