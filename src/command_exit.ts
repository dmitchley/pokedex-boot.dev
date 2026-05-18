import { exit } from 'node:process';

export function commandExit() {
  console.log('Closing the Pokedex... Goodbye!');
  process.exitCode = 0;
  process.exit(0);
}
