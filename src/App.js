import "./css/main.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Works from "./components/Works/Work";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/LogOut/LogOut";
import { Route, Routes } from "react-router-dom";
import WorkPopup from "./components/Works/WorkPopup/WorkPopup";

function App(props) {
  return (
    <main className="app-wrapper">
      <WorkPopup />
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/MyWorks" element={<Works />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
