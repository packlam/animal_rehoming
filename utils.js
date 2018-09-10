const faker = require('faker');
const traits = ['Adventurous', 'Helpful', 'Affable', 'Humble', 'Capable',
                'Imaginative', 'Charming', 'Impartial', 'Confident',
                'Independent', 'Conscientious', 'Keen', 'Cultured',
                'Meticulous', 'Dependable', 'Observant', 'Discreet',
                'Optimistic', 'Dutiful', 'Persistent', 'Encouraging',
                'Precise', 'Exuberant', 'Reliable', 'Fair', 'Trusting',
                'Fearless', 'Valiant', 'Gregarious'];

const getTrait = () => traits[Math.floor(Math.random() * traits.length)];

const createAnimal = () => (
  {
    name: faker.name.firstName(),
    image_url: faker.image.imageUrl(),
    colour: faker.commerce.color(),
    traits: [getTrait(), getTrait(), getTrait()],
    owner_id: null
  }
);

const createOwner = () => (
  {
    name: faker.name.firstName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city()
    },
    phone: faker.phone.phoneNumber()
  }
);

module.exports = { createAnimal, createOwner };