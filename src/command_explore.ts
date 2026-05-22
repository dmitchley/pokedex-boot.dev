import { exit } from 'node:process';
import { State } from './state.js';

export const commandExplore = async (state: State): Promise<void> => {
  if (!state.args) {
    console.log('Please provide a location');
    return;
  }

  const data = await state.pokeApi.fetchLocation(state.args);
  console.log(`Exploring ${state.args}`);

  if (data.names.length < 1) {
    console.log('Please provide a valid location');
    return;
  }
  console.log(`Exploring ${state.args}`);
  console.log('Found Pokemon:');

  data?.pokemon_encounters.forEach(encounter => {
    console.log(` - ${encounter.pokemon.name}`);
  });
};
