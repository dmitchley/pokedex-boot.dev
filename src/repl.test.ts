import { describe, expect, test, it } from 'vitest';
import { cleanInput } from './repl.js';

// cleaninput test
test('test clean up', () => {
  //  expect(cleanInput('hello darkness my old friend').toBe())
  expect(cleanInput('hello darkness my old friend')).toEqual(['hello', 'darkness', 'my', 'old', 'friend']);
});
