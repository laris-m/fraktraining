import React, { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import { Movie } from "../interfaces/Movie";
import { ParamTypes } from "../interfaces/ParamTypes";
import "../assets/scss/SingleMovie.scss";

export const SingleMovie: FC = () => {
  const { slug } = useParams<ParamTypes>();
  const movieContext = useContext(MovieContext);
  const [movie, setMovie] = useState<Movie | null>(null);

  const fetchMovie = async () => {
    setMovie(await movieContext.getSingleMovie(slug));
  };

  useEffect(() => {
    fetchMovie();
  });

  return movie ? (
    <div className="singleMovie">
      <h1>
        Title:
        <em>
          <span className="title"> {movie.title}</span>
        </em>
      </h1>
      <img src={movie.image.fields.file.url} alt="" />
      <h2>
        Director: <em>{movie.director}</em>
      </h2>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
