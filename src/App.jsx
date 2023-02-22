import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App min-h-screen bg-gray-200">
      <NavBar />
      <ItemListContainer greeting={"Welcome"} />
    </div>
  );
}

export default App;
