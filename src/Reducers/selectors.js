import { createSelector } from 'reselect'

const tracksSelector = state => state.api.tracks
const currentTrackIDSelector = state => state.player.currentTrackId