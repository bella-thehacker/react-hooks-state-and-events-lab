
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Form from './Form';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <Form />
   

    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route  path="/" element={<About />}/>

    </Routes>
      
    </div>
  );
}

export default App;
