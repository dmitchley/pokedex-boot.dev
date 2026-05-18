import { CLICommand } from './state.js';
import { getCommands } from './getCommands.js';
import { State } from './state.js';

export const commandHelp = async (state: State): Promise<void> => {
  console.log('helping you');
  const commands = await Object.values(state.commands);
  for (let i = 0; i < commands.length; i++) {
    console.log(`${commands[i].name}: ${commands[i].description}`);
  }
};
