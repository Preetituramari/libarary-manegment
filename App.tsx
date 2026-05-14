/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import UserPortal from './pages/UserPortal';
import EmployeePortal from './pages/EmployeePortal';
import AdminPortal from './pages/AdminPortal';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portal/user" element={<UserPortal />} />
          <Route path="/portal/employee" element={<EmployeePortal />} />
          <Route path="/portal/admin" element={<AdminPortal />} />
        </Routes>
      </Layout>
    </Router>
  );
}
