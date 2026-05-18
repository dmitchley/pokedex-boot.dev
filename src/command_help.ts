import { CLICommand } from './command.js';
import { getCommands } from './getCommands.js';

export const commandHelp = (commands: Record<string, CLICommand>) => {
  console.log('helping you');
};
