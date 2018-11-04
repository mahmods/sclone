const initialState = {
    tracks: []
  };

  const reducer = (state = initialState, action) => {
      if(action.type === "FETCH_TRACKS_SUCCESS") {
          return {
              ...state,
              tracks: action.tracks
          }
      }
      return state
  }

  export default reducer