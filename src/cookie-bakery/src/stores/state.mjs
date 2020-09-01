import { writable } from 'svelte/store';
import {
  Themes,
} from '../constants.mjs';

const state = {
  theme: Themes.LIGHT,
};

const createState = () => {
  const {
    subscribe,
    set,
    update
  } = writable(state);

  return {
    subscribe,
    toggleTheme: () => update((currentState) => {
      const newTheme = currentState.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
      const newState = Object.assign({}, currentState, { theme: newTheme });

      return newState;
    }),
    setTheme: (theme) => update((currentState) => {
      if (currentState.theme === theme) {
        return currentState;
      }

      const newState = Object.assign({}, currentState, { theme });

      return newState;
    }),
    theme: () => state.theme,
  }
};

export const STATE = createState();