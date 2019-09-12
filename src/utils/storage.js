


function getItem(key) {
  const reult = window.localStorage.getItem(key)
    return JSON.parse(reult)
}

function setItem(key,value) {
  window.localStorage.setItem(key,JSON.stringify(value))
}

function removeItem(key) {
  window.localStorage.removeItem(key)
}
export {
    getItem,
    setItem,
    removeItem
}