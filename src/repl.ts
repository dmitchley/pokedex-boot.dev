import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Pokedex > ',
});

// main loop file

export const startREPL = (): void => {
  rl.prompt();
  rl.on('line', input => {
    if (input.length < 1) {
      rl.prompt();
    } else {
      let current = cleanInput(input);
      console.log('Your command was: ' + current[0]);
      rl.prompt();
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
