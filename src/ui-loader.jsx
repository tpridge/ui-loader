'use-strict';
import React from 'react';

class UILoader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.ready) {
      return <div>{this.props.children}</div>;
    } else {
      return (
        <div className="ui-loader">
          <div className="ui-loader-bg"></div>
          <div className="ui-loader-spinner">{this.props.label}</div>
        </div>
      );
    }
  }
}

UILoader.propTypes = {
  label: React.PropTypes.string.isRequired,
  ready: React.PropTypes.bool.isRequired
};

UILoader.defaultProps = {
  label: 'loading...',
  ready: false
};

export default UILoader;
