
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
