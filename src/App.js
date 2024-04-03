import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import './App.css';
import FormikForm from './pages/FormikForm';
import Portal from "./pages/Portal";
import Header from "./Header";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Portal/>}/>
        <Route path="/form" element={<FormikForm/>}     />
        <Route path="/portal" element={<Portal/>} />
        {/* <Route path="/*" element={<FormikForm/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
