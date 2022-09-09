import { createSelector } from '@ngrx/store';

import { solution } from '../helpers/solution';
import { AppState } from '../reducers';
import { ExpressionState } from '../states/expression.state';

export const getExpression = createSelector(
  (state: AppState) => state.expression,
  (expression: Readonly<ExpressionState>) => expression
);

export const getSolution = createSelector(
  (state: AppState) => state.expression,
  (expression: Readonly<ExpressionState>) => solution(expression).toString()
);
