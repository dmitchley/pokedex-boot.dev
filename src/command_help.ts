import { CLICommand } from './state.js';
import { getCommands } from './getCommands.js';
import { State } from './state.js';

export const commandHelp = (state: State): void => {
  console.log('helping you');
  const commands = Object.values(state.commands);
  for (let i = 0; i < commands.length; i++) {
    console.log(`${commands[i].name}: ${commands[i].description}`);
  }
};
