import { exit } from 'node:process';
import { State } from './state.js';

export const commandExit = (state: State): void => {
  console.log('Closing the Pokedex... Goodbye!');
  state.readline.close();

  // process.exitCode = 0;
  process.exit(0);
};
