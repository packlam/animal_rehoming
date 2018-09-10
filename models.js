const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
  {
    name: String,
    image_url: String,
    colour: String,
    traits: Array,
    owner_id: String
  }
);

const ownerSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      street: String,
      city: String
    },
    phone: String
  }
);

module.exports = {
  Animal: mongoose.model('animals', animalSchema),
  Owner: mongoose.model('owners', ownerSchema)
};