import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from './shop.types'

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true }
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false }
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false }
    default:
      return state
  }
}
export default shopReducer
