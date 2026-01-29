interface MovieModalProps {
  movie: any;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-zinc-900 rounded-lg max-w-3xl w-full p-6 relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl hover:text-gray-400"
        >
          ✕
        </button>

        <div className="flex gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-48 rounded-md"
          />

          <div>
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm text-gray-400 mb-4">
              Release: {movie.release_date}
            </p>
            <p className="text-gray-200">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
