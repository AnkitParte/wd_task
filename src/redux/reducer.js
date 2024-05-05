import { COMP_NAME, EXPR, LOCATION, ROLE, SALARY } from './actions'

const initialState = {
  role: '',
  expr: '',
  location: '',
  salary: '',
  company: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLE:
      return {
        ...state,
        role: action.payload
      }
    case EXPR:
      return {
        ...state,
        expr: action.payload
      }
    case LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case SALARY:
      return {
        ...state,
        salary: action.payload
      }
    case COMP_NAME:
      return {
        ...state,
        company: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
