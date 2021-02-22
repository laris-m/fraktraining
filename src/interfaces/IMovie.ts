import { Asset } from 'contentful';

export interface IMovie {
  title: string;
  slug: string;
  image: Asset;
  director: string;
  year: number;
  country: string;
  mins: number;
}
