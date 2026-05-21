import { Cache } from './pokecache.js';

export class PokeAPI {
  private static readonly baseURL = 'https://pokeapi.co/api/v2';
  private cache: Cache;
  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;

    const cached = this.cache.get<ShallowLocations>(url);
    if (cached) {
      return cached;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`PokeAPI request failed: ${res.status} ${res.statusText} for ${url}`);
    }
    //return res.json() as Promise<ShallowLocations>;
    const locations = (await res.json()) as ShallowLocations;
    this.cache.add(url, locations);
    return locations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {
      const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

      const cached = this.cache.get<Location>(url);
      if (cached) {
        return cached;
      }

      const res = await fetch(url);
      // if (!res.ok) {
      //   throw new Error(`PokeAPI request failed: ${res.status} ${res.statusText} for ${url}`);

      // }

      const location = (await res.json()) as Location;
      this.cache.add(url, location);
      return location;
    } catch (err: any) {
      console.warn(`PokeAPI request failed: ${err} `);
    }
    return { names: [], pokemon_encounters: [] };
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[];
};

export type Location = {
  name?: string;
  url?: string;
  names: any[];
  pokemon_encounters: any[];
};
