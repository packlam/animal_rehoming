const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27017/animal_rehoming';
const { Animal, Owner } = require('./models');
const { createAnimal, createOwner } = require('./utils');

const animals = Array.from({length: 1000}, createAnimal);
const owners = Array.from({length: 1000}, createOwner)

mongoose.connect(db_url, { useNewUrlParser: true })
  .then(() => {
    console.log(`connected to ${db_url}`);
    return mongoose.connection.dropDatabase();
  })
  .then(() => {
    return Animal.insertMany(animals);
  })
  .then(() => {
    return Owner.insertMany(owners);
  })
  .catch(console.log);