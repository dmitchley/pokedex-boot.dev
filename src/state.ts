import { createInterface, type Interface } from 'readline';
import { getCommands } from './getCommands.js';
//const readline = require('node:readline');
import { ReadLine } from 'node:readline';
export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export const initState = (): State => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });

  const commands = getCommands();

  return {
    readline: rl,
    commands: commands,
  };
};
