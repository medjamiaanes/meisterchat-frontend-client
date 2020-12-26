export const setObject = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object))
}

export const getObject = (key) => {
  const object = localStorage.getItem(key)

  if (object) return JSON.parse(object)

  return null
}
