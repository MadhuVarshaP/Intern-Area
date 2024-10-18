import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import JobDetails from "./Components/JobDetails";
import InternDetails from "./Components/InternDetails";
import InternList from "./Components/InternList";
import JobList from "./Components/JobList";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/intern/:title" element={<InternDetails />} />
          <Route path="/job/:title" element={<JobDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/internList" element={<InternList />} />
          <Route path="/jobList" element={<JobList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
