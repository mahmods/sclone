import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Root from '../Components/Root'
import * as playerActions from '../Actions/playerActions'
import { fetchTracksSart } from '../Actions/apiActions'

const MainContainer = props => {
    return <Root {...props} />;
  };

const mapStateToProps = state => {
  const { isPlaying, currentTrackId, streamUrl, currentTime,  duration, muted, volume } = state.player;
  const { tracks } = state.api;
  return {
        isPlaying,
        muted,
        streamUrl,
        currentTrackId,
        tracks,
        currentTime,
        duration,
        volume
    };
  };

export default connect(mapStateToProps, {fetchTracksSart, ...playerActions})(MainContainer);
  