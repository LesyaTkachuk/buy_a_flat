import React from "react";
import PropTypes from "prop-types";

import styles from "./Display.module.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: props.display };
    this.divRef = React.createRef();
    this.spanRef = React.createRef();
  }

  getFontSize() {
    return parseFloat(
      window
        .getComputedStyle(this.divRef.current, null)
        .getPropertyValue("font-size")
    );
  }

  reduceFontSize() {
    if (
      this.divRef.current.clientWidth >
      this.spanRef.current.clientWidth + 15
    ) {
      return;
    }

    this.divRef.current.style.fontSize = this.getFontSize() - 1 + "px";

    this.reduceFontSize();
  }

  resetFontSize() {
    this.divRef.current.style.fontSize = "36px";
  }

  render() {
    return (
      <div ref={this.divRef} className={styles.display}>
        <span ref={this.spanRef} className={styles.displaySpan}>
          {this.props.display}
        </span>
      </div>
    );
  }

  componentDidUpdate() {
    this.resetFontSize();
    this.reduceFontSize();
  }
}

Display.propTypes = {
  display: PropTypes.string,
};

export default Display;
