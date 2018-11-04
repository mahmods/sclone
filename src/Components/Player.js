import React, { Component } from 'react';
import Slider from './Slider'
import { formatSeconds } from '../utils'

class Player extends Component {
    constructor() {
        super()
        this.audioElement = null;
    }
    componentDidUpdate(prevProps) {
        const { isPlaying } = this.props;
        const { audioElement } = this;
        if (isPlaying) {
          audioElement.play();
        } else {
            audioElement.pause();
        }
    }
    togglePlay() {
        const { audioElement } = this;
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      }
      toggleMuted() {
        const { audioElement } = this;
        const { muted } = audioElement;
        audioElement.muted = !muted;
      }
      changeCurrentTime(currentTime) {
        this.audioElement.currentTime = currentTime;
      }
      changeVolume(volume) {
        const { audioElement } = this;
        audioElement.muted = false;
        audioElement.volume = volume;
      }
      onTimeUpdate() {
        const { audioElement, props } = this;
        const { onTimeUpdate } = props;
        onTimeUpdate(Math.floor(audioElement.currentTime));
      }
      onVolumeChange() {
        const { audioElement, props } = this;
        const { onVolumeChange } = props;
        onVolumeChange(audioElement.muted, audioElement.volume);
      }
      onLoadedMetadata() {
        const { audioElement, props } = this;
        const { onLoadedMetadata } = props;
        onLoadedMetadata(Math.floor(audioElement.duration));
      }
      onEnded() {
        const { playNextSong } = this.props;
        playNextSong();
      }
  render() {
      const {tracks, volume, streamUrl, isPlaying, onPause, onPlay,changeVolume, currentTime, duration, muted, playNextSong, currentTrackId} = this.props;
    return (
        <div className="player">
          <audio 
            src={streamUrl} 
            ref={(node) => { this.audioElement = node; }} 
            onPlay={onPlay}
            onPause={onPause}
            onEnded={this.onEnded.bind(this)}
            onTimeUpdate={this.onTimeUpdate.bind(this)}
            onVolumeChange={this.onVolumeChange.bind(this)}
            onLoadedMetadata={this.onLoadedMetadata.bind(this)}
            autoPlay></audio>
          <div className="player--song-image">
            <img src={currentTrackId != null ? tracks[currentTrackId].artworkUrl : ''} alt=""/>
          </div>
          <div className="player--song-title">
          {currentTrackId != null ? tracks[currentTrackId].title : ''}
          <div className="player--song--user">{currentTrackId != null ? tracks[currentTrackId].user.username : ''}</div>
          </div>
          
          <div className="player--star-time">00:00</div>
          <div className="player--slider">
            <Slider 
                onChange={this.changeCurrentTime.bind(this)} 
                value={currentTime} 
                duration={duration} />
          </div>
          <div className="player--duration">{formatSeconds(duration)}</div>
          <div className="player--controls">
            <button className="player--controls__Btn" onClick={this.togglePlay.bind(this)}><i className="fa fa-backward" aria-hidden="true"></i></button>
            <button className="player--controls__PlayBtn" onClick={this.togglePlay.bind(this)}><i className={isPlaying ? "fa fa-pause" : "fa fa-play"} aria-hidden="true"></i></button>
            <button className="player--controls__Btn" onClick={playNextSong}><i className="fa fa-forward" aria-hidden="true"></i></button>
          </div>
          <div className="player--muteBtn">
            <button className="player--controls__Btn" onClick={this.toggleMuted.bind(this)}><i className={muted ? "fa fa-volume-off" : "fa fa-volume-up"} aria-hidden="true"></i></button>
          </div>
          <div className="player--slider-vol">
            <Slider 
                onChange={this.changeVolume.bind(this)} 
                value={volume} 
                duration={1} />
          </div>
        </div>
    );
  }
}

export default Player;