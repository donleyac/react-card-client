export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    console.log(action);
    socket.emit('action', action);
  }
  //ToDo figure out to prevent it from constantly executing
  // if (action.meta && action.meta.local) {
  //   store.dispatch(action);
  // }
  return next(action);
}
