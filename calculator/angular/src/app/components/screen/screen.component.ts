import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/reducers';
import { getExpression, getSolution } from '../../store/selectors/expression.selectors';
import { getTheme } from '../../store/selectors/theme.selectors';
import { CssVariables } from '../../types';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  cssVariables: CssVariables;
  expression$ = this.store.select(getExpression);
  solution$ = this.store.select(getSolution);

  constructor(private store: Store<AppState>) {
    store.select(getTheme).subscribe((theme) => {
      this.cssVariables = {
        '--textColor': theme.textColor,
      };
    });
  }
}
