import { State } from './state.js';

export const commandPokedex = async (state: State) => {
  const caught = Object.keys(state.caughtPokemon);

  if (caught.length === 0) {
    console.log('Your Pokedex is empty. Go catch some pokemon!');
    return;
  }

  console.log('Your Pokedex:');
  for (const name of caught) {
    console.log(` - ${name}`);
  }
};
