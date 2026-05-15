export const cleanInput = (input: string): string[] => {
  let items = input.split(' ');
  let names: string[] = [];
  for (let i = 0; i < items.length; i++) {
    names.push(items[i]);
  }

  //console.log('the names array is: ' + names);

  return names;
};

//cleanInput('hello darkness my old friend');
