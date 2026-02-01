import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
