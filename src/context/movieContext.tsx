import { createClient } from "contentful";
import { createContext } from "react";
import { Movie } from "../interfaces/Movie";
import { spaceId, contentfulApiToken } from "../../package.json";

const contentfulClient = createClient({
  space: spaceId,
  accessToken: contentfulApiToken,
  host: "preview.contentful.com",
});

const getMovies = async (): Promise<Movie[]> => {
  var response = await contentfulClient.getEntries<Movie>();
  return response.items.map((entry) => ({
    title: entry.fields.title,
    slug: entry.fields.slug,
    image: entry.fields.image,
    director: entry.fields.director,
    year: entry.fields.year,
    country: entry.fields.country,
    mins: entry.fields.mins,
  }));
};

const getSingleMovie = async (slug: string): Promise<Movie> => {
  var movies = await getMovies();
  var singleMovie = movies.filter((m) => m.slug === slug);
  return singleMovie[0];
};

export const MovieContext = createContext({
  getMovies: getMovies,
  getSingleMovie: getSingleMovie,
});
