import {
  CounterActionTypes,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from './models/actions';

import { Counter } from './models/Counter';
import { Action, Reducer } from 'redux';

const defaultState: Counter = {
  count: 0,
};

export const counterReducer: Reducer<Counter, Action> = (
  state = defaultState,
  action: CounterActionTypes
) => {
  const nextState = {
    count: state.count,
  };
  switch (action.type) {
    case INCREMENT_COUNTER:
      nextState.count = state.count + 1;
      return nextState;
    case DECREMENT_COUNTER:
      nextState.count = state.count - 1;
      return nextState;
    default:
      return state;
  }
};
