import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps } from 'next/types';
import React, { useState } from 'react';
import prisma from '../lib/prisma';
import styles from '../styles/Home.module.css';

type MovieRatingEntity = {
  id: string;
  title: string;
  rating: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const movie_ratings = await prisma.movieRating.findMany();
  return {
    props: { ratings: JSON.parse(JSON.stringify(movie_ratings)) },
  };
};

export default function Home({ ratings }: { ratings: MovieRatingEntity[] }) {
  const [movie_ratings, setMovieRatings] = useState(ratings);

  const submitMovieRating = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      rating: { value: string };
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: (target.title as HTMLInputElement).value,
        rating: (target.rating as HTMLInputElement).value,
      }),
    };

    const response = await fetch('/api/movie-rating', options);
    const new_rating = await response.json();
    setMovieRatings([...movie_ratings, new_rating]);
    (target.title as HTMLInputElement).value = '';
    (target.rating as HTMLInputElement).value = '';
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Architect Next.js Example</title>
      </Head>

      <p className={styles.logo}>
        <a href="//architect.io" target="blank" rel="noopener noreferrer">
          <Image src="https://cdn.architect.io/logo/horizontal.png" width={400} height={59.5} alt="Architect Logo" />
        </a>
      </p>

      <br />

      <h1>Favorite Movies</h1>

      <br />

      <form onSubmit={submitMovieRating}>
        <div className={styles['user-inputs']}>
          <div className={styles['form-control']}>
            <input
              type="text"
              id="title"
              name="title"
              placeholder='Title*'
              required
              maxLength={100}
            />
          </div>
          <div className={styles['form-control']}>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder='Rating (1-5)*'
              required
              maxLength={1}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />

      {movie_ratings.length ?
        <div>
          <table>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Movie Rating</th>
              </tr>
            </thead>
            <tbody>
              {movie_ratings.map((movie_rating, i) => {
                return [
                  <tr key={i}>
                    <td>{movie_rating.title}</td>
                    <td>{movie_rating.rating}</td>
                  </tr>
                ];
              })}
            </tbody>
          </table>
        </div> :
        <div>
          No entries found
        </div>
      }
    </div>
  );
};
