import React, { Component } from 'react';
import {kFormatter} from '../utils'

class Track extends Component {
    constructor(props) {
        super(props)
        const {track, tracks} = props
        this.index = tracks.indexOf(track)
    }
    playTrack() {
        const { playTrack, track } = this.props
        playTrack(this.index, track)
    }
    pauseTrack() {
        const { onPause } = this.props
        onPause()
    }
  render() {
      const {track, isPlaying, currentTrackId} = this.props;

    return (
        <div className="track">
            <div className="track--info" 
            style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 100%), url('+(track.artwork_url ? track.artwork_url.replace('large','t500x500') : track.user.avatar_url)+')'}}>
                <div className="track--info__title">{track.title}</div>
                <div className="track--info__user">{track.user.username}</div>
            </div>
            <div className="track--stats">
                <span><i className="fa fa-play" aria-hidden="true"></i>{kFormatter(track.playback_count)}</span>
            <button 
            className="player--controls__PlayBtn" 
            onClick={isPlaying && currentTrackId === this.index ? this.pauseTrack.bind(this) : this.playTrack.bind(this)}>
                <i className={isPlaying && currentTrackId === this.index ? "fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
            </button>
            <span><i className="fa fa-heart" aria-hidden="true"></i>{kFormatter(track.favoritings_count)}</span>
            </div>
        </div>
    );
  }
}

export default Track;