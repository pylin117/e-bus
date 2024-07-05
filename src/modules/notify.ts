import { Notify } from 'quasar'

const notifyTimeout = 3000

export const successNotify: any = (msg: string) =>
  Notify.create({
    type: 'positive',
    color: 'positive',
    message: msg,
    timeout: notifyTimeout,
    position: 'center'
  })

export const errorNotify: any = (msg: string) =>
  Notify.create({
    type: 'negative',
    color: 'negative',
    message: msg,
    timeout: notifyTimeout,
    position: 'top'
  })

export const warningNotify: any = (msg: string) =>
  Notify.create({
    type: 'warning',
    color: 'warning',
    message: msg,
    timeout: notifyTimeout,
    position: 'top'
  })
