import { exit } from 'node:process';
import { State } from './state.js';

export const commandExplore = async (state: State): Promise<void> => {
  if (!state.args) {
    console.log('Please provide a location');
    return;
  }

  const data = await state.pokeApi.fetchLocation(state.args);
  console.log(`Exploring ${state.args}`);
  // console.log(JSON.stringify(data));

  if (data.names.length < 1) {
    console.log('Please provide a valid location');
    return;
  }
  console.log(`Exploring ${state.args}`);
  console.log('Found Pokemon:');

  data?.pokemon_encounters.forEach(encounter => {
    console.log(` - ${encounter.pokemon.name}`);
  });
  // state.readline.on('line', input => {
  //   console.log(`Received: ${input}`);
  // });
  //console.log('hi:: ' + state.readline.line);
  //console.log('explore sayss ' + JSON.stringify(state.readline));

  // await state.readline.on('data', data => {
  //   console.log(`You typed ${data}`);
  //   // process.exit();
  // });
  // state.readline.on('line', async input => {
  //   const data = await state.pokeApi.fetchLocation('mt-coronet-5f');

  //   const datareturn = data;
  //   console.log(`heyo + ${datareturn}`);
  //   // console.log('the input to explore was ' + input);
  // });
  // const data = await state.pokeApi.fetchLocation();
};
