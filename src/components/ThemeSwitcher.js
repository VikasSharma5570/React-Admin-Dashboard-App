import React from 'react';
import { Switch } from '@mui/material';

function ThemeSwitcher({ toggleTheme }) {
  return (
    <div className="theme-switcher">
      <Switch onChange={toggleTheme} />
    </div>
  );
}

export default ThemeSwitcher;
