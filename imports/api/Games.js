// Make a new db
import { Mongo } from 'meteor/mongo';

export const Games = new Mongo.Collection('games');