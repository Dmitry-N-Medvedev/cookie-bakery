import * as sapper from '@sapper/app';
import {
	STATE
} from './stores/state.mjs';
import {
	LocalStorageKeys,
} from './constants.mjs';

STATE.setTheme(localStorage.getItem(LocalStorageKeys.THEME) || 'light');

sapper.start({
	target: document.querySelector('#cookie-bakery')
});