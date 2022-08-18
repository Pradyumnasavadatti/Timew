import "./App.css";
import Time from "./component/Time";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Time />} />
      </Routes>
    </>
  );
}

export default App;
