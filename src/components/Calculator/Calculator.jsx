import React from 'react';
import Engine from './Engine';
import Display from './Display';
import Button from './Button';
import styles from './Calculator.module.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '0',
      engine: new Engine(),
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);
  }

  handleButtonClick(value) {
    this.setState({
      display: this.state.engine.calculate(value),
    });
  }

  handleEqualClick(value) {
    this.props.setTransactionAmount(this.state.engine.calculate(value));
    this.state.engine.allClear();
    this.setState({
      display: '0',
    });
    this.props.closeCalculator();
  }

  render() {
    return (
      <div className={styles.calculator}>
        <Display display={this.state.display} />
        <Button
          value={this.state.engine.clearable ? 'C' : 'AC'}
          className={[
            styles.button,
            styles.whiteButton,
            styles.twoSignsButton,
          ].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="+/-"
          className={[
            styles.button,
            styles.whiteButton,
            styles.twoSignsButton,
          ].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="%"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value={'\u00F7'}
          className={[styles.button, styles.orangeButton].join(' ')}
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="7"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="8"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="9"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="x"
          className={[styles.button, styles.orangeButton].join(' ')}
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="4"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="5"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="6"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="-"
          className={[styles.button, styles.orangeButton].join(' ')}
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="1"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="2"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="3"
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="+"
          className={[styles.button, styles.orangeButton].join(' ')}
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="0"
          className={[
            styles.button,
            styles.whiteButton,
            styles.largeButton,
          ].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="."
          className={[styles.button, styles.whiteButton].join(' ')}
          onClick={this.handleButtonClick}
        />
        <Button
          value="="
          className={[styles.button, styles.orangeButton].join(' ')}
          onClick={(this.handleButtonClick, this.handleEqualClick)}
        />
      </div>
    );
  }
}
