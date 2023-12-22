import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './components/News';
import SingleNews from './components/SingleNews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/home" element={<News />} />
        <Route path="/news/:id" element={<SingleNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
