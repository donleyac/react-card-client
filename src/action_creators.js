export function setState(state) {
  return {type: 'SET_STATE',state: state};
}

export function modIndicator(state, playerId, indicator, modifier) {
  return {type: 'INDICATORS', playerId: playerId, indicator: indicator, modifier: modifier};
}
export function modCollection(state, collection, property, value, op, category) {
  return {
    type:'COLLECTIONS',
    collection:collection,
    property:property,
    value:value,
    op:op,
    category:category};
}
