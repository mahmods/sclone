const initialState = {
    isPlaying: false,
    muted: false,
    streamUrl: '',
    currentTrackId: null,
    currentTime: 0,
    duration: 0,
    volume: 1
  };

  const reducer = (state = initialState, action) => {
      if(action.type === "PLAY_TRACK") {
        return {
            ...state,
            isPlaying: true,
            streamUrl: action.stream_url + "?client_id=4171ddf703b3125d83b79473b0630636",
            currentTrackId: action.index
        }
    }
    if(action.type === "ON_PLAY") {
        return {
            ...state,
            isPlaying: true,
        }
    }
    if(action.type === "ON_PAUSE") {
        return {
            ...state,
            isPlaying: false,
        }
    }
    if(action.type === "ON_TIME_UPDATE") {
        return {
            ...state,
            currentTime: action.currentTime,
        }
    }
    if(action.type === "ON_VOLUME_CHANGE") {
        return {
            ...state,
            muted: action.muted,
            volume: action.volume
        }
    }
    if(action.type === "ON_LOADED_METADATA") {
        return {
            ...state,
            duration: action.duration,
        }
    }
    if(action.type === "ON_ENDED") {
        return {
            ...state,
            duration: action.duration,
        }
    }
      return state
  }

  export default reducer