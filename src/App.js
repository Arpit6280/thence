import Registration from "./Components/Pages/Registration";
import Success from "./Components/Pages/Success";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="px-4 font-[manrope]">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
