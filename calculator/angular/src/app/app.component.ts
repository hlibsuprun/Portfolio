import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/reducers';
import { getTheme } from './store/selectors/theme.selectors';
import { CssVariables } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cssVariables: CssVariables;

  constructor(private store: Store<AppState>) {
    store.select(getTheme).subscribe((theme) => {
      this.cssVariables = {
        '--containerBackgroundColor': theme.containerBackgroundColor,
      };
    });
  }
}
