export const findObjectByKeyValue = (object: any, key: string, value: any): any => {
  if (Array.isArray(object)) {
    for (const obj of object) {
      const result = findObjectByKeyValue(obj, key, value)
      if (result) {
        return obj
      }
    }
  } else {
    if (Object.prototype.hasOwnProperty.call(object, key) && object[key] === value) {
      return object
    }

    for (const k of Object.keys(object)) {
      if (typeof object[k] === 'object') {
        const o = findObjectByKeyValue(object[k], key, value)
        if (o !== null && typeof o !== 'undefined') return o
      }
    }
    return null
  }
}

export const findSubdomain = (url: string): string => {
  // eslint-disable-next-line
  const regexParse = new RegExp('([a-z-0-9]{2,63})[.]+([a-z.]{2,5})$')
  const regexExceptArray = regexParse.exec(url)
  if (regexExceptArray !== null) {
    return regexExceptArray[0]
  }
  return ''
}

export const getDateWithoutTime = (dt: string): string => {
  const dtTmp = new Date(Date.parse(dt))
  return dtTmp.toLocaleDateString()
}

export const getDateWithTime = (dt: string): string => {
  const dtTmp = new Date(Date.parse(dt))
  return dtTmp.toLocaleString()
}

/* check if is null object or array */
export const isNull = (thing: any): boolean => {
  if (!thing) {
    return true
  }
  return Object.keys(thing).length > 0 ? false : true
}

/**
 * check if is Primitive type
 */
export const isPrimitive = (thing: any): boolean => {
  return thing !== Object(thing)
}

/**
 * Check is empty string
 */
export const isEmptyString = (thing: string): boolean => {
  return thing === ''
}

/**
 * Check is empty anything
 */
export const isEmptyValue = (thing: any): boolean => {
  const type: string = typeof thing
  if (type === 'number') {
    return false
  }
  if (type === 'string') {
    return isNull(thing)
  }
  if (type === 'object') {
    const obj: any = deepCopyObject(thing) // Make custom object readable
    if (Array.isArray(obj)) {
      for (const item of obj) {
        if (!isEmptyValue(item)) {
          return false
        }
      }
      return true
    } else {
      return isNull(obj)
    }
  }
  return true
}

export const deepCopyObject = (source: any): any => {
  return JSON.parse(JSON.stringify(source))
}

export const isUsingPhoneOrTablet = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase()
  const deviceToMatch = [
    /android/i,
    /webOS/i,
    /iphone/i,
    /ipad/i,
    /ipod/i,
    /blackberry/i,
    /windows phone/i
  ]
  return deviceToMatch.some((toMatchItem) => {
    return userAgent.match(toMatchItem)
  })
}

export const numFormat = (cellValue: number): string => {
  return parseFloat(cellValue.toFixed(2)).toLocaleString()
}

export const formateDate = (date: Date): string => {
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export const formateDateWithTime = (date: Date): string => {
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}
export function mapKeysToApiKey(
  collection: CollectionItem[],
  data: DataItem[]
): Record<string, string>[] {
  return data.map((item) => {
    const newItem: Record<string, string> = {}
    Object.keys(item).forEach((key) => {
      const name = collection.find((c) => c.apiKey === key)?.name
      if (name) {
        newItem[name] = item[key]
      }
    })
    return newItem
  })
}
export interface CollectionItem {
  name: string
  apiKey: string
}
export interface DataItem {
  [key: string]: string
}
