import { getCommands } from './getCommands.js';
import { initState } from './state.js';
const listOfCommands = initState();

// main loop file

export const startREPL = (): void => {
  console.log('Welcome to the Pokedex!');
  console.log('Usage:');
  console.log('');
  let CurrentCommands = Object.values(getCommands());
  for (let i = 0; i < CurrentCommands.length; i++) {
    console.log(`${CurrentCommands[i].name}: ${CurrentCommands[i].description}`);
  }

  listOfCommands.readline.prompt();

  listOfCommands.readline.on('line', input => {
    if (input.length < 1) {
      //console.log('hey');
      listOfCommands.readline.prompt();
    } else {
      const current = cleanInput(input);
      const command = current[0];

      // console.log('listOfCommands ' + JSON.stringify(listOfCommands));

      switch (command) {
        case listOfCommands.commands.help.name:
          listOfCommands.commands.help.callback(listOfCommands);
          break;
        case listOfCommands.commands.exit.name:
          listOfCommands.commands.exit.callback(listOfCommands);
          break;
        default:
          console.log('Unknown command');
          break;
      }

      listOfCommands.readline.prompt();

      // let current = cleanInput(input);
      // let listOfCommands = getCommands();

      // if (listOfCommands.help.name !== current[0].toString()) {
      //   console.log('Unknown command');
      //   rl.prompt();
      // } else {
      //   listOfCommands.current.callback(listOfCommands);
      //   //console.log(listOfCommands.help.description);
      // }
      // //console.log('listOfCommands ' + JSON.stringify(listOfCommands.help.name == current) + 'listOfCommands tpye is ' + typeof listOfCommands);
      // //console.log('Your command was: ' + current[0] + 'listOfCommands is: ' + listOfCommands);
      // //console.log('available commands' + JSON.stringify(getCommands()));
      // //if (current[0]) rl.prompt();
    }
  });
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
