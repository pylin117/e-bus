import lang from 'quasar/lang/zh-TW.js'
import { Cookies, Loading, Notify, QSpinnerPuff, LocalStorage } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-symbols-outlined'

export default {
  config: {
    loading: {
      /* look at QuasarConfOptions from the API card */
      spinner: QSpinnerPuff,
      spinnerColor: 'primary'
    }
  },
  plugins: {
    Cookies,
    Loading,
    Notify,
    LocalStorage
  },
  iconSet: quasarIconSet,
  lang: lang
}
