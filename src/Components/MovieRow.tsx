type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

type Props = {
  title: string;
  movies: Movie[];
};

const MovieRow = ({ title, movies }: Props) => {
  return (
    <section className="px-6 mt-6">
      <h2 className="text-white text-xl font-semibold mb-3">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-40 rounded hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
