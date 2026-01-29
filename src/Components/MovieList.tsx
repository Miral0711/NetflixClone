import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const MovieList = ({ movies }: { movies: any[] }) => {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  return (
    <>
      <div className="relative z-30 flex gap-6 px-10 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
};

export default MovieList;
