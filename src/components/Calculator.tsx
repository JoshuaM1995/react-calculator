import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { AppTheme } from '../App';

type CalculatorProps = {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
};

const Calculator = ({ theme, setTheme }: CalculatorProps) => {
  const [calculationBefore, setCalculationBefore] = useState('');
  const [calculation, setCalculation] = useState('0');
  const [calculationAfter, setCalculationAfter] = useState('');
  const [action, setAction] = useState('');

  const handleClick = ({ target: { innerHTML: value } }: any) => {
    const parsedValue = parseFloat(value);

    if (!Number.isNaN(parsedValue) || value === '.') {
      setCalculation((previousCalculation) => (previousCalculation === '0' ? value : `${previousCalculation}${value}`));
    } else {
      switch (value) {
        case 'AC':
          setCalculation('0');
          setCalculationBefore('');
          setCalculationAfter('');
          setAction('');
          break;
        case '=':
          setCalculationAfter(() => calculation);
          setCalculation((previousCalculation) => {
            switch (action) {
              case '/':
                return (parseFloat(calculationBefore) / parseFloat(calculation)).toString();
              case 'x':
                return (parseFloat(calculationBefore) * parseFloat(calculation)).toString();
              case '-':
                return (parseFloat(calculationBefore) - parseFloat(calculation)).toString();
              case '+':
                return (parseFloat(calculationBefore) + parseFloat(calculation)).toString();
              case '%':
                return (parseFloat(calculationBefore) % parseFloat(calculation)).toString();
              default:
                return previousCalculation;
            }
          });
          break;
        default:
          if (action !== '') {
            setAction(value);
            setCalculationBefore(calculation);
            setCalculationAfter('');
            setCalculation('');
          } else {
            setAction(value);
            setCalculationBefore(calculation);
            setCalculation('');
          }
      }
    }
  };

  return (
    <>
      <div className={`calculator calculator-${theme}`}>
        <div className="calculator-header">
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
              {calculationBefore}
              <span>{action}</span>
              {calculationAfter}
            </div>
            <div className="calculation">{calculation ? parseFloat(calculation) : ''}</div>
          </div>
        </div>
        <div className="calculator-body">
          <button type="button" className="calculator-button modifier" onClick={handleClick}>AC</button>
          <button type="button" className="calculator-button modifier" onClick={handleClick}>+/-</button>
          <button type="button" className="calculator-button modifier" onClick={handleClick}>%</button>
          <button type="button" className="calculator-button action" onClick={handleClick}>/</button>

          <button type="button" className="calculator-button" onClick={handleClick}>7</button>
          <button type="button" className="calculator-button" onClick={handleClick}>8</button>
          <button type="button" className="calculator-button" onClick={handleClick}>9</button>
          <button type="button" className="calculator-button action" onClick={handleClick}>x</button>

          <button type="button" className="calculator-button" onClick={handleClick}>4</button>
          <button type="button" className="calculator-button" onClick={handleClick}>5</button>
          <button type="button" className="calculator-button" onClick={handleClick}>6</button>
          <button type="button" className="calculator-button action" onClick={handleClick}>-</button>

          <button type="button" className="calculator-button" onClick={handleClick}>1</button>
          <button type="button" className="calculator-button" onClick={handleClick}>2</button>
          <button type="button" className="calculator-button" onClick={handleClick}>3</button>
          <button type="button" className="calculator-button action" onClick={handleClick}>+</button>

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" className="calculator-button" />
          <button type="button" className="calculator-button" onClick={handleClick}>0</button>
          <button type="button" className="calculator-button" onClick={handleClick}>.</button>
          <button type="button" className="calculator-button action" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
