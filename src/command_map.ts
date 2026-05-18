import { State } from './state.js';

export const commandMap = async (state: State) => {
  const url = state.nextLocationsURL ?? undefined;

  const data = await state.pokeApi.fetchLocations(url);

  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;

  for (const loc of data.results) {
    console.log(loc.name);
  }
};
