import { getCommands } from './getCommands.js';
import { initState } from './state.js';
const listOfCommands = await initState();

// main loop file

export const startREPL = async (): Promise<void> => {
  try {
    console.log('Welcome to the Pokedex!');
    console.log('Usage:');
    console.log('');
    let CurrentCommands = await Object.values(getCommands());
    for (let i = 0; i < CurrentCommands.length; i++) {
      console.log(`${CurrentCommands[i].name}: ${CurrentCommands[i].description}`);
    }

    listOfCommands.readline.prompt();

    listOfCommands.readline.on('line', async input => {
      if (input.length < 1) {
        //console.log('hey');
        listOfCommands.readline.prompt();
      } else {
        const current = cleanInput(input);
        const command = current[0];
        listOfCommands.args = current[1];
        //console.log('current second arg ' + command);

        // console.log('listOfCommands ' + JSON.stringify(listOfCommands));

        switch (command) {
          case listOfCommands.commands.help.name:
            await listOfCommands.commands.help.callback(listOfCommands);
            break;
          case listOfCommands.commands.exit.name:
            await listOfCommands.commands.exit.callback(listOfCommands);
            break;
          case listOfCommands.commands.map.name:
            await listOfCommands.commands.map.callback(listOfCommands);
            break;
          case listOfCommands.commands.mapb.name:
            await listOfCommands.commands.mapb.callback(listOfCommands);
            break;
          case listOfCommands.commands.explore.name:
            await listOfCommands.commands.explore.callback(listOfCommands);
            break;
          case listOfCommands.commands.catch.name:
            await listOfCommands.commands.catch.callback(listOfCommands);
            break;
          case listOfCommands.commands.inspect.name:
            await listOfCommands.commands.inspect.callback(listOfCommands);
            break;
          case listOfCommands.commands.pokedex.name:
            await listOfCommands.commands.pokedex.callback(listOfCommands);
            break;

          default:
            console.log('Unknown command');
            break;
        }

        listOfCommands.readline.prompt();
      }
    });
  } catch (e) {
    console.error(e);
  }
};

// clean & seperate files

export const cleanInput = (input: string): string[] => {
  let items = input.split(' ');
  let names: string[] = [];
  for (let i = 0; i < items.length; i++) {
    names.push(items[i].toLowerCase());
  }
  // console.log('the input is: ' + names);

  return names;
};
