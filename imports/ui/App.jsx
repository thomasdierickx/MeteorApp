import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '/imports/api/Collection';
import { Game } from './Game';

export const App = () => {
  const [start, setStart] = useState(false);
  const toggleStart = () => setStart(!start);


  const collection = useTracker(() => LinksCollection.find({}).fetch());
  return (
    <>
      <main className="main">
        {
          start === false ?
            <button className="btnStart" onClick={toggleStart}>Start</button> :
            <Game collection={collection} />
        }
      </main>
    </>
  )
  };
