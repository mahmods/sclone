import React, { Component } from 'react';
const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
class Slider extends Component {
    constructor() {
        super()
        this.domNode = null;
        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
      }
      onClick(e) {
          const {duration, onChange } = this.props
        const percent = (e.clientX - this.offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
        onChange(percent * duration)
      }
    offsetLeft = (element) => {
        let el = element;
        let x = el.offsetLeft;
      
        while (el.offsetParent) {
          x += el.offsetParent.offsetLeft;
          el = el.offsetParent;
        }
      
        return x;
      }
    onMouseDown() {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove(e) {
        const { domNode } = this;
        const { duration, onChange } = this.props;
        const diff = e.clientX - this.offsetLeft(domNode);
        const percent = Math.min(Math.max(diff / domNode.offsetWidth, 0), 1);
        onChange(percent * duration)
      }
    
    onMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
      }

  render() {
    const { value, duration } = this.props;
    const width = `${(value / duration) * 100}%`;
    return (
        <div className="slider" onClick={this.onClick} ref={(node) => { this.domNode = node; }} role="button" tabIndex="0">
            <div className="slider__bar">
                <div className="slider__bar__fill" style={{ width }}>
                    <div className="slider__handle" onClick={prevent} role="button" tabIndex="0" onMouseDown={this.onMouseDown.bind(this)}>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Slider;