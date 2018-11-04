import {map} from 'rxjs/add/operator/map';
//import { catch } from 'rxjs/add/operator/catch';
import {mergeMap} from 'rxjs/add/operator/mergeMap';

import { user_id, client_id } from '../constants'

import {fetchTracks, fetchTracksSuccess} from '../Actions/apiActions';
import { ajax } from 'rxjs/observable/dom/ajax';

const fetchTracksEpic = (action$) =>
	action$
		.ofType("FETCH_TRACKS_START")
    .mergeMap(() => ajax({
      url: `http://api.soundcloud.com/users/${user_id}/favorites?client_id=${client_id}`,
      method: 'GET',
      timeout: 20000,
      responseType: 'json',
      crossDomain: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .map((tracks) => fetchTracksSuccess(tracks.response))
    );

export default fetchTracksEpic;