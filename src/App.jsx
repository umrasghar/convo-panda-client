import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingInPage from './pages/SingInPage';
import SingUpPage from './pages/SingUpPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path = "/" element={<Home />} /> */}
          <Route path = "/signin" element={<SingInPage />} />
          <Route path = "/signup" element={<SingUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
