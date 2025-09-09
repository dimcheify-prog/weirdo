import { useState } from 'react';
import './styles/index.scss';
import { Block } from './components/Block/Block';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [counter, setCounter] = useState(0);

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Block />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>click me</button>
    </div>
  );
};
