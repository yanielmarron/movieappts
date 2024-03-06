export interface Movie {
    id: number;
    name: string;
    year: number;
    genre: string;
    actors: { id: number; name: string }[];
  }