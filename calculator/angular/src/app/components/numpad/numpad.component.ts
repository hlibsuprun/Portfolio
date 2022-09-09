import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ExpressionActions from '../../store/actions/expression.actions';
import { AppState } from '../../store/reducers';
import { getTheme } from '../../store/selectors/theme.selectors';
import { CssVariables } from '../../types';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss'],
})
export class NumpadComponent {
  cssVariables: CssVariables;

  constructor(private store: Store<AppState>) {
    store.select(getTheme).subscribe((theme) => {
      this.cssVariables = {
        '--blocksBackgroundColor': theme.blocksBackgroundColor,
        '--buttonBackgroundColor': theme.buttonBackgroundColor,
        '--hoverButton': theme.hoverButton,
        '--textColor': theme.textColor,
      };
    });
  }

  public numberClickHandler(event: MouseEvent) {
    event.preventDefault();
    const innerHTML: string = (event.target as HTMLTextAreaElement).innerHTML.trim();
    const strEnteredNumber = String(innerHTML.match(/^\d+/));

    this.store.dispatch(ExpressionActions.number({ strEnteredNumber }));
  }

  // eslint-disable-next-line no-unused-vars
  public buttons: { value: string; onClick(event?: MouseEvent): void }[] = [
    { value: 'ac', onClick: () => this.store.dispatch(ExpressionActions.ac()) },
    { value: 'reverse', onClick: () => this.store.dispatch(ExpressionActions.reverse()) },
    { value: 'percent', onClick: () => this.store.dispatch(ExpressionActions.percent()) },
    { value: 'divide', onClick: () => this.store.dispatch(ExpressionActions.divide()) },
    { value: '7', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: '8', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: '9', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: 'multiple', onClick: () => this.store.dispatch(ExpressionActions.multiple()) },
    { value: '4', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: '5', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: '6', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: 'minus', onClick: () => this.store.dispatch(ExpressionActions.minus()) },
    { value: '1', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: '2', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: '3', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: 'plus', onClick: () => this.store.dispatch(ExpressionActions.plus()) },
    { value: 'backspace', onClick: () => this.store.dispatch(ExpressionActions.backspace()) },
    { value: '0', onClick: (event: MouseEvent) => this.numberClickHandler(event) },
    { value: 'point', onClick: () => this.store.dispatch(ExpressionActions.point()) },
    { value: 'equals', onClick: () => this.store.dispatch(ExpressionActions.equals()) },
  ];
}
