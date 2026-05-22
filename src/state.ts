import { createInterface, type Interface } from 'readline';
import { getCommands } from './getCommands.js';
//const readline = require('node:readline');
import { ReadLine } from 'node:readline';
import { PokeAPI } from './pokeapi.js';
import { stat } from 'node:fs';
import { Pokemon } from './pokeapi.js';

// let api = new PokeAPI();
// let poki = api.fetchLocations();
//const pokeApiObject = new PokeAPI();

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeApi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  args: any;
  caughtPokemon: Record<string, Pokemon>;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export const initState = (): State => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });

  const commands = getCommands();
  const pokeApi = new PokeAPI(3000);

  return {
    readline: rl,
    commands: commands,
    pokeApi: pokeApi,
    nextLocationsURL: null,
    prevLocationsURL: null,
    args: null,
    caughtPokemon: {},
  };
};
