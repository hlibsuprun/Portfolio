import { createReducer, on } from '@ngrx/store';

import { Ac } from '../../models/Ac';
import { Backspace } from '../../models/Backspace';
import { Divide } from '../../models/Divide';
import { Equals } from '../../models/Equals';
import { Minus } from '../../models/Minus';
import { Multiple } from '../../models/Multiple';
import { Number } from '../../models/Number';
import { Percent } from '../../models/Percent';
import { Plus } from '../../models/Plus';
import { Point } from '../../models/Point';
import { Reverse } from '../../models/Reverse';
import * as ExpressionActions from '../../store/actions/expression.actions';
import { solution } from '../helpers/solution';
import { initialExpressionState } from '../states/expression.state';

export const expressionReducer = createReducer(
  initialExpressionState,
  on(ExpressionActions.ac, () => new Ac().clickHandler()),
  on(ExpressionActions.backspace, (state) => new Backspace(state).clickHandler()),
  on(ExpressionActions.divide, (state) => new Divide(state, solution(state)).clickHandler()),
  on(ExpressionActions.equals, (state) => new Equals(state, solution(state)).clickHandler()),
  on(ExpressionActions.minus, (state) => new Minus(state, solution(state)).clickHandler()),
  on(ExpressionActions.multiple, (state) => new Multiple(state, solution(state)).clickHandler()),
  on(ExpressionActions.number, (state, { strEnteredNumber }) =>
    new Number(state).clickHandler(strEnteredNumber)
  ),
  on(ExpressionActions.percent, (state) => new Percent(state).clickHandler()),
  on(ExpressionActions.plus, (state) => new Plus(state, solution(state)).clickHandler()),
  on(ExpressionActions.point, (state) => new Point(state).clickHandler()),
  on(ExpressionActions.reverse, (state) => new Reverse(state).clickHandler())
);
