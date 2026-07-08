// debounce.js
export const Debounce = (fn, delay = 500) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    return new Promise((resolve) => {
      timer = setTimeout(async () => {
        resolve(await fn(...args))
      }, delay)
    })
  }
}
