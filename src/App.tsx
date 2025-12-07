import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CardsPage from './pages/CardsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CardsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

