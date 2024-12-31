import Blog from "./components/Blog";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <div className="container min-h-screen bg-zinc-300">
        <Header />
        <Blog />
        <Pagination />
      </div>
    </>
  );
}

export default App;
