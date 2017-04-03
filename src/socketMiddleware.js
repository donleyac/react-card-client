export default socket => store => next => action => {
  //TODO Too many requests
  // socket.emit('action', action);
  return next(action);
}
