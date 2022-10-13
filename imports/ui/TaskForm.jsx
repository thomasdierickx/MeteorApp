import React, { useState } from 'react';
import { countCollection } from '/imports/api/Collection';

export const TaskForm = () => {

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   if (!text) return;

  //   countCollection.insert({
  //     text: text.trim(),
  //     createdAt: new Date(),
  //     userId: user._id
  //   });

  //   setText('');
  // };
 
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};