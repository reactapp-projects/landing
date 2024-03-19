import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureHighlights from "./Components/FeatureHighlights";
import ComingSoon from "./Components/ComingSoon";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: "20vh" }}>Header</div>
      <FeatureHighlights />
      <div style={{ backgroundColor: "#736D6D", height: "0.1px" }}></div>
      <ComingSoon />
    </div>
  );
}

export default App;
