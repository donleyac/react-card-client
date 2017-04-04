export function setState(state) {
  return {type: 'SET_STATE',state};
}

export function modIndicator(playerId, indicator, modifier) {
  return {
    meta: {remote: true},
    type: 'INDICATORS',
    playerId: playerId,
    indicator: indicator,
    modifier: modifier};
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
