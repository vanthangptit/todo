import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div className="row">
          <div className="pie-progress" role="progressbar" data-goal="100" aria-valuemin="0" aria-valuemax="100">
            <span className="pie-progress__number">0%</span>
          </div>
          <div>
            <button id="button_start">start()</button>
            <button id="button_stop">stop()</button>
            <button id="button_go">go('50')</button>
            <button id="button_go_percentage">go('50%')</button>
            <button id="button_finish">finish()</button>
            <button id="button_reset">reset()</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;