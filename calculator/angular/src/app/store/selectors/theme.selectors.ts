import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers';
import { ThemeState } from '../states/theme.state';

export const getTheme = createSelector(
  (state: AppState) => state.theme,
  (theme: Readonly<ThemeState>) => theme
);
