const initialState = {
  names: [],
  selected: ''
}

export default function users(state = initialState, action) {
  switch (action.type) {
      case 'SET_USER':
        return { ...state, names: action.payload };

      case 'GO_REPOS':
        return { ...state, selected: action.payload };

      default:
        return state;

  }
}

