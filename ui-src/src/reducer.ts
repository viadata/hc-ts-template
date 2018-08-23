
import * as redux from 'redux';

import {AppState, ReduxAction} from '../../types';

const defaultState: AppState = {
  numClicks: 0
};

export default (oldState: AppState = defaultState, action: ReduxAction): AppState => {
  const state = {
    ...oldState
  };

  switch (action.type) {

    case 'INCREMENT': {
      state.numClicks += 1;
      break;
    }

    case 'DECREMENT': {
      state.numClicks -= 1;
      break;
    }

  }
  return state;
}
