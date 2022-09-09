export interface ExpressionState {
  strFirstNumber: string;
  sign: '/' | '-' | '*' | '+' | '';
  strSecondNumber: string;
}

export const initialExpressionState: ExpressionState = {
  strFirstNumber: '',
  sign: '',
  strSecondNumber: '',
};
