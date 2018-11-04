import { combineEpics } from 'redux-observable';
import fetchTracksEpic from './api.epic';

export default combineEpics(
    fetchTracksEpic
);