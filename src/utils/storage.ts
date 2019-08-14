import * as store from "store"

export const clearStorage = (key: string): any => {
  try {
    return store.set(key, undefined)
  } catch (err) {
    console.log(`${key} ERROR`, err)
  }
}

export const getStorageValue = (key: string): any => {
  try {
    return store.get(key)
  } catch (err) {
    console.log(`${key} ERROR`, err)
    return undefined
  }
}

export const setStorageValue = (key: string, value: any): void => {
  try {
    return store.set(key, value)
  } catch (err) {
    console.log(`${key} ERROR`, err)
  }
}

export const clearAll = (): void => store.clearAll()
