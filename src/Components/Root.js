import React, {Component} from 'react';
import Track from './Track';
import Player from './Player';

class Root extends Component {
  componentDidMount() {
    const { fetchTracksSart } = this.props
    fetchTracksSart();
  }
  render() {
    const { tracks } = this.props
    return (
      <div className="Root">
        <header className="header">
          <div className="header--top">
            <div className="header--top__brand"><i className="fa fa-soundcloud" aria-hidden="true"></i>SClone</div>
            <div className="header--top__socials">
              <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="header--bottom">
            <nav className="header--bottom__nav">
              <a className="header--bottom__nav-link" href="">Tracks</a>
              <a className="header--bottom__nav-link" href="">Reposts</a>
              <a className="header--bottom__nav-link active" href="">Likes</a>
            </nav>
          </div>
        </header>
        <div className="tracks">
          <Player {...this.props}  />
          {tracks.length > 0 ? (tracks.map(track => 
            <Track key={tracks.indexOf(track)} track={track} {...this.props} />
          )) : ('loading...')}
        </div>
      </div>
    );
  }
}

export default Root;
