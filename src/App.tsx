import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import './App.scss';
import { IMovie } from './interfaces/IMovie';
import { Entry } from 'contentful';
import { spaceId, contentfulApiToken } from '../package.json';

function App() {
  const [movies, setMovies] = useState<Entry<IMovie>[]>([]);
  useEffect(() => {
    const client = contentful.createClient({
      space: spaceId,
      accessToken: contentfulApiToken,
      host: 'preview.contentful.com',
    });
    client
      .getEntries<IMovie>()
      .then(response => {
        console.log(response.items);
        setMovies(response.items);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {movies.map(movie => (
          <li key={movie.fields.slug}>
            <h3>Title: {movie.fields.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
