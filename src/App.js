import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import Sidebar from './components/Sidebar';  // Ensure this path is correct
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
