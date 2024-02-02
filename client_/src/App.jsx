import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Home from "./pages/home";
import DemandePdf from "./pages/auth/demandePdf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} /> 
      <Route path="/demandePdf" element={<DemandePdf />} /> 
    </Routes>
    
  );
}

export default App;
