import { callApi } from '../utils'
import { user_id, client_id } from '../constants'

export const fetchTracks = () => async dispatch => {
    const json = await callApi(`http://api.soundcloud.com/users/${user_id}/favorites?client_id=${client_id}`)
    //dispatch(fetchTracksSuccess(json.json))
    return json.json
}

export const fetchTracksSuccess = tracks => ({
    type: "FETCH_TRACKS_SUCCESS",
    tracks
})

export const fetchTracksSart = () => ({
    type: "FETCH_TRACKS_START"
})


