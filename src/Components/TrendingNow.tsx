import MovieList from "./MovieList";
import { MOVIE_DATA, POPULAR_MOVIES, TOP_RATED_MOVIES, ACTION_MOVIES } from "../data/movies";


const TrendingNow = () => {
  return (
    <section className="mt-6 space-y-10">
      <div>
        <h2 className="text-2xl font-semibold text-white px-6 mb-3">
          Trending Now
        </h2>
        <MovieList movies={MOVIE_DATA.results} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white px-6 mb-3">
          Popular Movies
        </h2>
        <MovieList movies={POPULAR_MOVIES} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white px-6 mb-3">
          Top Rated
        </h2>
        <MovieList movies={TOP_RATED_MOVIES} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white px-6 mb-3">
          Action Movies
        </h2>
        <MovieList movies={ACTION_MOVIES} />
      </div>
    </section>
  );
};

export default TrendingNow;
