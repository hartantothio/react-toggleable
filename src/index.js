import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggleable extends Component {
  static defaultProps = {
    initialOn: false,
    onToggle: () => {}
  };

  static propTypes = {
    initialOn: PropTypes.bool,
    onToggle: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      on: props.initialOn
    };
  }

  toggle = () => {
    this.setState(
      ({ on }, props) => ({ on: !on }),
      this.props.onToggle(this.state.on)
    );
  };

  render() {
    const { children } = this.props;

    if (typeof children === 'function') {
      return children({ on: this.state.on, toggle: this.toggle });
    }
  }
}

export default Toggleable;
