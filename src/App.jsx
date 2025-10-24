import './App.css'
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import ROUTES from './Routes';
import Start from './pages/Start/Start';
import Play from './pages/Play/Play';
import Result from './pages/Result/Result';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.START} element={<Start />} />
          <Route path={ROUTES.PLAY} element={<Play />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
          {/* ハッシュルーターでも不一致時はトップに戻す */}
          <Route path="*" element={<Navigate to={ROUTES.START} replace />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
