import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, createAction } from "@reduxjs/toolkit";

export interface ITeacher { 
    name: string;
    surname: string;
    languages: string[],
    levels: string[],
    rating: number;
    reviews: {
        reviewer_name: string;
        reviewer_rating: number;
        comment: string;
    }[];
    price_per_hour: number;
    lessons_done: number;
    avatar_url : string;
    lesson_info : string;
    conditions: string[];
    experience : string;
}

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

// export interface LoadingState {
//   loading: boolean;
//   error: Error | null;
// }

interface LoadingActions<ActionState> {
  pending: ActionCreatorWithoutPayload;
  fulfilled: ActionCreatorWithPayload<ActionState, string>;
  rejected: ActionCreatorWithPayload<Error, string>;
}

export const createLoadingActions = <ActionState>(prefix: string) => {
  return {
    pending: createAction(`${prefix}/${PENDING}`),
    fulfilled: createAction(`${prefix}/${FULFILLED}`),
    rejected: createAction(`${prefix}/${REJECTED}`),
    } as LoadingActions<ActionState>;
};
// export const fetchLoadingActions = createLoadingActions<Blog[]>('fetchLists');