import Flat from "./components/Flat/Flat.jsx";
import Round from "./components/Round/Round.jsx";
import Flatcross from "./components/FlatCross/Flatcross.jsx";
import "./components/All.css";

function App() {
  return (
    <div>
      <Flatcross />
      <Round />
      <Flat />
    </div>
  );
}

export default App;
