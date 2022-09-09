import { createReducer, on } from '@ngrx/store';

import { switchToDark, switchToLight } from '../actions/theme.actions';
import { initialThemeState, themes } from '../states/theme.state';

export const themeReducer = createReducer(
  initialThemeState,
  on(switchToDark, () => themes['dark']),
  on(switchToLight, () => themes['light'])
);
