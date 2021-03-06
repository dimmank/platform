import { createAction, props } from '@ngrx/store';

export const searchBooks = createAction(
  '[Find Book Page] Search Books',
  props<{ query: string }>()
);

export type FindBookPageActionsUnion = ReturnType<typeof searchBooks>;
