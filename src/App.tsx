import Hero from "./Components/Hero";
import MovieRow from "./Components/MovieRow";
import { TRENDING, POPULAR, TOP_RATED, ACTION } from "./data/movies";


function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />

      <MovieRow title="Trending Now" movies={TRENDING} />
      <MovieRow title="Popular on Netflix" movies={POPULAR} />
      <MovieRow title="Top Rated" movies={TOP_RATED} />
      <MovieRow title="Action Movies" movies={ACTION} />
    </div>
  );
}

export default App;
