/** 
 * ???
 * 
 */
/**
 * getSessionStorageOrDefault
 * @param {string} key the key to look for in session
 * @param {string} defaultValue the return value if key is not found
 * @returns {string} either defaultValue || the value from session
 * function that returns either a value from session or a default that is passed in
 */
const getSessionStorageOrDefault = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key)
    if (!stored) return defaultValue
    return JSON.parse(stored)
}

const getWindowHeight = window => {
    return window.innerHeight
}

const getWindowWidth = window => {
    return window.innerWidth
}

export { getSessionStorageOrDefault, getWindowHeight, getWindowWidth }