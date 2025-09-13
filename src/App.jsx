import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ROUTES from './Routes';
import Start from './pages/Start/Start';
import Play from './pages/Play/Play';
import Result from './pages/Result/Result';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.START} element={<Start />} />
          <Route path={ROUTES.PLAY} element={<Play />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
