export function setState(state) {
  return {type: 'SET_STATE',state};
}

export function modIndicator(playerId, indicator, value, op) {
  return {
    meta: {remote: true},
    type: 'INDICATORS',
    playerId: playerId,
    indicator: indicator,
    value: value,
    op: op};
}
export function modCollection(collection, property, value, op, category) {
  return {
    meta: {remote: true},
    type:'COLLECTIONS',
    collection:collection,
    property:property,
    value:value,
    op:op,
    category:category};
}
