export default function Hero() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "./hero.png" }}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center bg-white bg-opacity-70 p-4 rounded-md">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Wysokiej jakości parapety</span>
            <span className="block text-indigo-600">Classic i Softline</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Odkryj naszą gamę wysokiej jakości aluminiowych parapetów. <br />{" "}
            md:max-w-3xl Wybierz między wzorami Classic i Softline, aby idealnie
            dopasować je do Twoich okien.
          </p>
        </div>
      </div>
    </div>
  );
}
