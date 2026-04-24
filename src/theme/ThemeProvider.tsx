import React, { PropsWithChildren, useState, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './ThemeContext';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const toTheme = (localTheme: string | null): Theme => {
    if (localTheme === Theme.LIGHT) return Theme.LIGHT;
    if (localTheme === Theme.DARK) return Theme.DARK;

    return Theme.LIGHT;
  };
  const [theme, setTheme] = useState<Theme>(toTheme(localStorage.getItem('theme')));

  const themeMemo = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={themeMemo}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
