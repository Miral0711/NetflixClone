import heroBg from "../assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh]">
      <img
        src={heroBg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full px-10 max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows
        </h1>

        <p className="mb-6">
          Watch anywhere. Cancel anytime.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
