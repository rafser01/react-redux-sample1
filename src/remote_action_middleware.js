import objectAssign from 'object-assign';


// export default store => next => action => {
//   console.log('in middleware', action);
//   return next(action);
// }s

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    socket.emit('action', objectAssign({}, action, {clientId}));
  }
  return next(action);
}
