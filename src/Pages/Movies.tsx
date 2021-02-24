import React, { FC, useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/movieContext";
import { Movie } from "../interfaces/Movie";
import "../assets/scss/Movies.scss";
import { Link } from "react-router-dom";

export const Movies: FC = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const movieContext = useContext(MovieContext);
  const fetchMovies = async () => {
    setMovies(await movieContext.getMovies());
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return movies ? (
    <div className="movies">
      <table className="movies-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Image</th>
            <th>Director</th>
            <th>Year</th>
            <th>Country</th>
            <th>Mins</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.slug}>
              <td>{movie.title}</td>
              <td>{movie.slug}</td>
              <td>
                <img width="200px" src={movie.image.fields.file.url} alt="" />
              </td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.country}</td>
              <td>{movie.mins}</td>
              <td>
                <Link className="movie-link" to={"/single-movie/" + movie.slug}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1>Loading..</h1>
  );
};
