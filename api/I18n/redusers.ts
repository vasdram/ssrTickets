import { handleActions } from 'redux-actions';
import { setLang } from './actions';
import { TI18n } from './I18n.types';


export const INITIAL_STATE: TI18n = {
  lang: 'ru'
}

export default handleActions(
  {
    [setLang]: (state: TI18n, actions: any): TI18n => ({
      lang: actions.payload,
    }),

  },
  INITIAL_STATE,
);