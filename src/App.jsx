import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="leaderboard" element={<Leaderboard />} />
      </Route>
    </Routes>
  );
};

export default App;
