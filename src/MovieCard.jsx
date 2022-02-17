import React from 'react'
import styles from './MovieCard.module.css'

const MovieCard = ({ movie }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img src={imgUrl} alt={movie.title} className={styles.movieImg}/>
            <div>{movie.title}</div>

        </li>

    )
}

export default MovieCard