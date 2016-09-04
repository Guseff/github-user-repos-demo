const initialState = {
  reposes: []
}

export default function users(state = initialState, action) {
  switch (action.type) {

      case 'LIST_REPOS':
        return { ...state, reposes: action.payload };

      default:
        return state;

  }
}

