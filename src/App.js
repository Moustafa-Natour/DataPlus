import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './modules/views/Routes/Routes';
import { AnalyticsProvider } from './modules/views/Analytics/AnalyticsContext';
import LocationDataFetcher from './modules/views/Analytics/LocationDataFetcher';

function App() {

  return (
    <div className="App">
      <AnalyticsProvider>
        <Router >
          {/* basename='/react/' */}
          <LocationDataFetcher />
          <AppRoutes />
        </Router>
      </AnalyticsProvider>
    </div>
  );
}

export default App;
