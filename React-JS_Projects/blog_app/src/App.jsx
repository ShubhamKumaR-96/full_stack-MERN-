import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container min-h-screen bg-zinc-300">
        <Header />
        <Blog />
      </div>
    </>
  );
}

export default App;
