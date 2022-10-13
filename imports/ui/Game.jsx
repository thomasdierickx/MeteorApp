import React from 'react';
import { CountForm } from './CountForm';

export const Game = (collection) => {
    let leftWidth = collection.collection[0].countLeft;
    let rightWidth = collection.collection[0].countRight;

    return ( 
        <>
            <section className="left" style={{width: `${leftWidth}%`}}>
                <CountForm numbers={collection} left={true} right={false} />
            </section>
            <section className="right" style={{width: `${rightWidth}%`}}>
                <CountForm numbers={collection} left={false} right={true} />
            </section>
        </>
     );
};