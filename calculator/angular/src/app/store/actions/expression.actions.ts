import { createAction, props } from '@ngrx/store';

export const ac = createAction('[Numpad] ac');
export const backspace = createAction('[Numpad] backspace');
export const divide = createAction('[Numpad] divide');
export const equals = createAction('[Numpad] equals');
export const minus = createAction('[Numpad] minus');
export const multiple = createAction('[Numpad] multiple');
export const number = createAction('[Numpad] number', props<{ strEnteredNumber: string }>());
export const percent = createAction('[Numpad] percent');
export const plus = createAction('[Numpad] plus');
export const point = createAction('[Numpad] point');
export const reverse = createAction('[Numpad] reverse');
