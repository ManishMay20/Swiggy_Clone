import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="w-4/5 m-auto"><Body/></div>
    </>
  );
}

export default App;
