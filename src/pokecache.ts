type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  #reap(): void {
    this.#cache.forEach((value, key, map) => {
      if (value.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key);
        //this.#reapIntervalId = key
      }
    });
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      // Your logic here

      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  add<T>(key: string, value: T) {
    this.#cache.set(key, { createdAt: Date.now(), val: value });
  }
  get<T>(key: string): T | undefined {
    let fetchedLocation = this.#cache.get(key);

    if (typeof fetchedLocation === 'undefined') {
      return undefined;
    }

    return fetchedLocation.val;
  }
}
