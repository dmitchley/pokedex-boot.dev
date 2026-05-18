export class PokeAPI {
  private static readonly baseURL = 'https://pokeapi.co/api/v2';

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`PokeAPI request failed: ${res.status} ${res.statusText} for ${url}`);
    }
    return res.json() as Promise<ShallowLocations>;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const res = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
    if (!res.ok) {
      throw new Error(`PokeAPI request failed: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<Location>;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};
