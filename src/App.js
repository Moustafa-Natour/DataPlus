import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './modules/views/Routes/Routes';
function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
