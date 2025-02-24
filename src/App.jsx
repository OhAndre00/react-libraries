import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import GithubUsers from "./Components/GithubUsers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" age={24} />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} incrementAmount={1} />}
        />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/users" element={<GithubUsers />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
