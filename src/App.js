import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureHighlights from "./Components/FeatureHighlights";
import ComingSoon from "./Components/ComingSoon";
function App() {
  return (
    <div className="App">
      <Header />
      <FeatureHighlights />
      <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
      <ComingSoon />
    </div>
  );
}

export default App;
