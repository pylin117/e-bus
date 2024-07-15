/* eslint-disable prefer-const */
import { defineStore } from 'pinia'

export const useBusRouteStore = defineStore('busRoute', () => {
  let busRoute = ''
  let city = ''
  
  return {
    busRoute,
    city
  }
})
