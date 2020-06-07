import React from 'react';

class CircularProgressbar extends React.Component {
  render() {
    const percentage = this.props.data;

    return (
      <article className="circular-progressbar">
        <div className="circular-progressbar__animation js-circular-progressbar-animation">
          <p>{percentage}%</p>
        </div>

        <div className="circular-progressbar__numbers text-secondary">
          <span className="js-circular-progressbar-number">{percentage}</span>%
        </div>
      </article>
    )
  }
}

export default CircularProgressbar;