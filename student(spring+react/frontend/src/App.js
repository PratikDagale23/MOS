import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Student } from './components/Studentfields';
import { Nav } from './components/Appbar';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <p>React+MySQL+Spring</p>
      <br />
      <Nav />
      <br />
      <br />
      <br />
      <Routes>
        <Route path='/' element={<Student />}  />
        <Route path='/test' element={<Student />}  />
      </Routes>
      
    </div>
  );
}

export default App;
