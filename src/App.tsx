import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Investments } from './pages/Investments';
import { GlobalStyle } from './styles/global';
import { NewInvestment } from './pages/NewInvestment';
import { EditInvestment } from './pages/EditInvestment';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/investments" replace />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/new-investment" element={<NewInvestment />} />
          <Route path="/edit-investment/:id" element={<EditInvestment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
