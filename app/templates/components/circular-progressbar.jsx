import React from 'react';

class CircularProgressbar extends React.Component {
  render() {
    const percentage = this.props.data;

    return (
      <div className="circular-progressbar js-circular-progressbar"
           role="circular-progressbar"
           data-barsize="15"
           data-speed="20"
           data-barcolor="#f2f2f2"
           data-trackcolor="rgba(255, 255, 255, 0.30)"
           data-goal={percentage}>
        <span className="circular-progressbar__number">0%</span>
      </div>
    )
  }
}

export default CircularProgressbar;