import './App.css';
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom";
import EditForm from './components/EditForm/EditForm'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
