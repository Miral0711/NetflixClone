interface MovieCardProps {
  poster: string;
  onClick: () => void;
}

const MovieCard = ({ poster, onClick }: MovieCardProps) => {
  return (
    <div
      onClick={onClick}
      className="min-w-[160px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-50"
    >
      <img
        src={poster}
        alt="Movie Poster"
        className="rounded-md shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
