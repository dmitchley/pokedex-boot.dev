import { cleanInput } from './repl.js';

function main(): void {
  console.log('Hello, world!');
}

//main();

let returnitem = cleanInput('hello darkness my old friend');

console.log('returnitem value is ' + returnitem + 'and the type is ' + typeof returnitem);
