import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { switchToDark, switchToLight } from '../../store/actions/theme.actions';
import { AppState } from '../../store/reducers';
import { getTheme } from '../../store/selectors/theme.selectors';
import { CssVariables } from '../../types';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  cssVariables: CssVariables;

  constructor(private store: Store<AppState>) {
    store.select(getTheme).subscribe((theme) => {
      this.cssVariables = {
        '--blocksBackgroundColor': theme.blocksBackgroundColor,
        '--hoverTheme': theme.hoverTheme,
        '--lightTheme': theme.lightTheme,
        '--darkTheme': theme.darkTheme,
      };
    });
  }

  public switchToLightTheme() {
    this.store.dispatch(switchToLight());
  }

  public switchToDarkTheme() {
    this.store.dispatch(switchToDark());
  }
}
