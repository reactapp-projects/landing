import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureHighlights from "./Components/FeatureHighlights";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <div className="App">
      <div style={{ height: "20vh" }}>Header</div>
      <FeatureHighlights />
      <div style={{ backgroundColor: "#736D6D", height: "0.1px" }}></div>
      <ComingSoon />
    </div>
  );
}

export default App;
