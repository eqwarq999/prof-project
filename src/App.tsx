import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageLazy } from './Pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './Pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';
import useTheme from './theme/useTheme';
import { classNames } from './helpers/classNames';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
