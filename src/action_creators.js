/*
export function setClientId(clientId) {
  return {
    type: 'SET_CLIENT_ID',
    clientId
  };
}

export function setConnectionState(state, connected) {
  return {
    type: 'SET_CONNECTION_STATE',
    state,
    connected
  };
}
*/

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setShow (id){
  return {
    type: 'TOGGLE',
    id
  }
}

export function searchItem (filter){
  // console.log("search item ", filter);
  return {
    type: 'FILTER',
    filter
  }
}

// export function next() {
//   // console.log('login value ');
//   return {
//     meta: {remote: true},
//     type: 'NEXT'
//   };
// }
