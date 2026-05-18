import { exit } from 'node:process';
import { State } from './state.js';

export const commandExit = async (state: State): Promise<void> => {
  console.log('Closing the Pokedex... Goodbye!');
  await state.readline.close();

  // process.exitCode = 0;
  process.exit(0);
};
