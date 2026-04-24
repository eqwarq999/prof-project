import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';
import { useContext } from 'react';

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const localTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(localTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, localTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
