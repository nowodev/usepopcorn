import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbId} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
