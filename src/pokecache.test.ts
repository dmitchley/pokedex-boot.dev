import { Cache } from './pokecache.js';
import { test, expect, describe } from 'vitest';

describe('Cache', () => {
  test.concurrent.each([
    {
      key: 'https://example.com',
      val: 'testdata',
      interval: 500,
    },
    {
      key: 'https://example.com/path',
      val: 'moretestdata',
      interval: 1000,
    },
  ])('reaps entries after $interval ms', async ({ key, val, interval }) => {
    const cache = new Cache(interval);

    cache.add(key, val);
    expect(cache.get(key)).toBe(val);

    // wait well past the interval so the reaper has had a chance to fire
    await new Promise(resolve => setTimeout(resolve, interval * 3));
    expect(cache.get(key)).toBeUndefined();

    cache.stopReapLoop();
  });

  test('returns undefined for missing keys', () => {
    const cache = new Cache(10_000);
    expect(cache.get('nope')).toBeUndefined();
    cache.stopReapLoop();
  });

  test('overwrites existing entries on re-add', () => {
    const cache = new Cache(10_000);
    cache.add('k', 'first');
    cache.add('k', 'second');
    expect(cache.get('k')).toBe('second');
    cache.stopReapLoop();
  });

  test('stores different value types', () => {
    const cache = new Cache(10_000);
    cache.add('str', 'hello');
    cache.add('num', 42);
    cache.add('obj', { a: 1, b: [2, 3] });

    expect(cache.get<string>('str')).toBe('hello');
    expect(cache.get<number>('num')).toBe(42);
    expect(cache.get<{ a: number; b: number[] }>('obj')).toEqual({ a: 1, b: [2, 3] });

    cache.stopReapLoop();
  });

  test('keeps entries that have not yet expired', async () => {
    const cache = new Cache(1000);
    cache.add('fresh', 'still here');

    await new Promise(resolve => setTimeout(resolve, 200));
    expect(cache.get('fresh')).toBe('still here');

    cache.stopReapLoop();
  });
});
