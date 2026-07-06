import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'bw';

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('cosmos_theme') as Theme) || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cosmos_theme', theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <button
        onClick={() => setTheme('bw')}
        className={`theme-btn ${theme === 'bw' ? 'active' : ''}`}
        title="Black & White High-Contrast Theme"
      >
        B&W
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        title="Space Dark Theme"
      >
        Dark
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        title="Academic Light Theme"
      >
        Light
      </button>
    </div>
  );
};
export default ThemeSwitcher;
