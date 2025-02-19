import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { NewInvestment } from './pages/NewInvestment';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/investments" replace />} />
          <Route path="/investments" element={<Home />} />
          <Route path="/new-investment" element={<NewInvestment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
