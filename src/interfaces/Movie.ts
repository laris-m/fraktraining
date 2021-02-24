import { Asset } from "contentful";

export interface Movie {
  title: string;
  slug: string;
  image: Asset;
  director: string;
  year: number;
  country: string;
  mins: number;
}
