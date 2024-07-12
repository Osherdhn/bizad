import { Routes, Route } from 'react-router-dom';
import Header from "./components/general/Header";
import MainPage from "./components/mainpage/MainPage";
import About from "./components/about/About";
import Services from "./components/services/MainServices";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
