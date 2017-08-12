import React, { Component } from 'react';

class Square extends Component {
  render() {
    let result = null;

    if (this.props.isCasePlayable() === true) {
      result = this.renderClikable();
    } else {
      result = this.renderUnclikable();
    }
    return result;
  }

  renderClikable() {
    return (
        <div className="square" onClick={ () => this.props.actionOnClick() }>
          <h1 className="h1char">&nbsp;</h1>
        </div>
    );
  }

  renderUnclikable() {
    return (
      <div className="square">
        <h1 className="h1char">{this.props.value}</h1>
      </div>
    );
  }
}

export default Square;
