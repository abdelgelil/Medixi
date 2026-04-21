import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/layout/Layout';

// Pages — create these files as you build each section
import Home         from './pages/Home';
import About        from './pages/About';
import Specialities from './pages/Specialities';
import Programs     from './pages/Programs';
import Calendar     from './pages/Calendar';
import Registration from './pages/Registration';
import Partners     from './pages/Partners';
import Insights     from './pages/Insights';
import Contact      from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index               element={<Home />} />
          <Route path="about"        element={<About />} />
          <Route path="specialities" element={<Specialities />} />
          <Route path="programs"     element={<Programs />} />
          <Route path="calendar"     element={<Calendar />} />
          <Route path="registration" element={<Registration />} />
          <Route path="partners"     element={<Partners />} />
          <Route path="insights"     element={<Insights />} />
          <Route path="contact"      element={<Contact />} />
          {/* Catch-all → home */}
          <Route path="*"            element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
