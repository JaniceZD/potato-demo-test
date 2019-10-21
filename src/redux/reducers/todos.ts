import { ADD_TODO, INIT_TODOS, UPDATE_TODO, EDIT_TODO } from '../actionTypes'

const todos = (state: any[] = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case INIT_TODOS:
      return [...action.payload]
    case UPDATE_TODO:
      state.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload
        } else {
          return t
        }
      });
      break;
    case EDIT_TODO:
      state.forEach((t) => {
        if (t.id === action.payload.id) {
          t.editing = true
          return t
        } else {
          t.editing = false
          return t
        }
      });
      break;
    default:
      return state
  }
}

export default todos;