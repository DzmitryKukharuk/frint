export default function isObservable(obj) {
  if (
    obj &&
    typeof obj.subscribe === 'function' &&
    typeof obj.map === 'function' &&
    typeof obj.filter === 'function'
  ) {
    return true;
  }

  return false;
}
