import { ActionReducerMap } from '@ngrx/store';

import { ExpressionState } from '../states/expression.state';
import { ThemeState } from '../states/theme.state';
import { expressionReducer } from './expression.reducer';
import { themeReducer } from './theme.reducer';

export interface AppState {
  theme: ThemeState;
  expression: ExpressionState;
}

export const reducers: ActionReducerMap<AppState> = {
  expression: expressionReducer,
  theme: themeReducer,
};
