export default function manageUsers(state = {users: []}, action){
  switch(action.type){
    case 'ADD_USER':
      var user = Object.assign({}, action.user)
      return {users: state.users.concat(user) }
    default:
      return state;
  }
}
