import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import CalculatorButton from './CalculatorButton';
import { AppTheme } from '../App';

type CalculatorProps = {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
};

// eslint-disable-next-line no-unused-vars
const Calculator = ({ theme, setTheme }: CalculatorProps) => (
  <>
    <div className={`calculator calculator-${theme}`}>
      <div className="header">
        <div className="theme-toggle-container">
          <div className="theme-toggle">
            <button type="button" onClick={() => setTheme('light')}>
              <FontAwesomeIcon icon={faSun} className="icon-sun" size="lg" />
            </button>

            <button type="button" onClick={() => setTheme('dark')}>
              <FontAwesomeIcon icon={faMoon} className="icon-moon" size="lg" />
            </button>
          </div>
        </div>

        <div className="header-display">
          <div className="history">
            308
            <span>x</span>
            42
          </div>
          <div className="calculation">12,936</div>
        </div>
      </div>
      <div className="body">
        <CalculatorButton>1</CalculatorButton>
      </div>
    </div>
  </>
);

export default Calculator;
