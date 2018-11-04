export const onPause = () => ({
    type: "ON_PAUSE",
  });
  
  export const onPlay = () => ({
    type: "ON_PLAY",
  });

export const playTrack = (index, track) => ({
  type: "PLAY_TRACK",
  index,
  stream_url: track.stream_url
})
export const onTimeUpdate = currentTime => ({
  type: "ON_TIME_UPDATE",
  currentTime
})
export const onLoadedMetadata = duration => ({
  type: "ON_LOADED_METADATA",
  duration,
})
export const playNextSong = () => (dispatch, getState) => {
  const state = getState();
  const nextIndex = state.player.currentTrackId + 1;
  dispatch(playTrack(nextIndex, state.api.tracks[nextIndex]));
};
export const onVolumeChange = (muted, volume) => ({
  type: "ON_VOLUME_CHANGE",
  muted,
  volume,
});