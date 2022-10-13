import { Meteor } from 'meteor/meteor';
// Import and initialize the new db
import { LinksCollection } from '/imports/api/Collection';

// Insert some cells
function insertCollection({ countLeft, countRight }) {
  LinksCollection.insert({ countLeft, countRight });
}

Meteor.startup(() => {
  if (LinksCollection.find().count() === 0) {
    insertCollection({
      countLeft: 50,
      countRight: 50,
    });
  };
});
