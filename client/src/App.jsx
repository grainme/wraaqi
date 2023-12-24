import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Home from "./pages/home";
import DemandePdf from "./pages/auth/demandePdf";
import DashboardCitoyen from "./layouts/dashboardCitoyen";
import DashboardFonctionnaire from "./layouts/dashboardFonctionnaire";
import DashboardCommune from "./layouts/dashboardCommune";
import LegalApp from "./pages/dashboard/LegalApp";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/fonctionnaire/*" element={<DashboardFonctionnaire/>} />
      <Route path="/citoyen/*" element={<DashboardCitoyen/>} />
      <Route path="/commune/*" element={<DashboardCommune/>} />
      {/* Had Dashboard li ta7t dyl admine */}
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} /> 
      <Route path="/demandePdf" element={<DemandePdf />} /> 
      <Route path="/test_legal" element={<LegalApp/>}/>
      
    </Routes>
    
  );
}

export default App;
