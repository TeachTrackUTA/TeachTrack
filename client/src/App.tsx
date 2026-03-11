import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Login from './pages/Login';
import StudentSurvey from './pages/StudentSurvey';
import StudentResults from './pages/StudentResults';
import ProfessorDasboard from './pages/ProfessorDashboard';
import CoordinatorDashboard from './pages/CoordinatorDashboard';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/" element={<Login />} />
          <Route path="/student/survey" element={<StudentSurvey />} />
          <Route path="/student/results" element={<StudentResults />} />
          <Route path="/professor/dashboard" element={<ProfessorDasboard />} />
          <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}