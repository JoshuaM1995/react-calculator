import React, { PropsWithChildren } from 'react';

type CalculatorButtonProps = {

} & PropsWithChildren<any>;

const CalculatorButton = ({ children }: CalculatorButtonProps) => (
  <div>{children}</div>
);

export default CalculatorButton;
