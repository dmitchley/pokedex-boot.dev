import { State } from './state.js';

export const commandCatch = async (state: State) => {
  if (!state.args) {
    console.log('Please provide a pokemon');
    return;
  }

  const pokemon = await state.pokeApi.fetchPokemon(state.args);
  console.log(`Throwing a Pokeball at ${state.args}...`);
  // console.log(JSON.stringify(typeof pokemon.base_experience));

  const res = Math.floor(Math.random() * pokemon.base_experience);
  if (res > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }

  console.log(`${pokemon.name} was caught!`);
  //  console.log('You may now inspect it with the inspect command.');
  state.caughtPokemon[pokemon.name] = pokemon;
};
