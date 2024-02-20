import "./App.css";
import { RedocStandalone } from "redoc";
import msellerApi from "./msellerApi.json";
function App() {
  return (
    <div className="App">
      <RedocStandalone spec={msellerApi} />
    </div>
  );
}

export default App;
