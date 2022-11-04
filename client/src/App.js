import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Jobs from './Pages/Jobs';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/jobs' element={<Jobs/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
