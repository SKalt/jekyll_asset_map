
const syncHash = ([mutation]) => {
  const {target} = mutation, {id, open} = target, loc = location.hash
  return location.hash = open
    ? `#${id}`
    : document.querySelector(loc) === target
      ? ''
      : loc
}

export const observer = new MutationObserver(syncHash)
export default syncHash