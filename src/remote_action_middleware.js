export default socket => store => next => action => {
  //TODO this is sending too many requests
  // socket.emit('action', action);
  console.log('middleware', action);
  return next(action);
}
