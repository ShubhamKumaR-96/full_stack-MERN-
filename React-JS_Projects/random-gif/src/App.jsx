import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="bg-zinc-400 w-full min-h-screen flex flex-col items-center p-4">
      <h1 className="bg-white w-[90%] text-center uppercase mt-3 p-2 text-lg md:text-xl font-bold rounded-lg">
        Random Gif Generator
      </h1>
      <div className="flex flex-col w-full md:w-1/2 mt-5 gap-4">
        {/* Random Gif Generator */}
        <Random />
        {/* Tagged Gif Generator */}
        <Tag />
      </div>
    </div>
  );
}

export default App;
