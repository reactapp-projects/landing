import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureHighlights from "./Components/FeatureHighlights";

function App() {
  return (
    <div className="App">
      <div style={{ height: "20vh" }}>Header</div>
      <FeatureHighlights />
    </div>
  );
}

export default App;
