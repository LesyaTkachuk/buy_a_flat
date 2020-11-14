class Engine {
  constructor() {
    this.number = "";

    this.prevInput = null;
    this.prevNumber = null;
    this.prevOperation = null;
    this.nextNumber = null;
    this.nextOperation = null;
    this.clearable = false;

    this.OperationEnum = {
      addition: "+",
      subtraction: "-",
      multiplication: "x",
      division: "\u00F7",
      percentage: "%",
      sign: "+/-",
      equal: "=",
      allClear: "AC",
      clear: "C",
    };
  }

  updatePreviousStatus(number, input) {
    this.prevNumber = number;
    this.prevInput = input;
    this.prevOperation = input;
  }

  // Handle and process all digit inputs including .
  handleDigitInput(input) {
    this.clearable = true;

    if (this.isOperation(this.prevInput)) {
      this.number = "";
    }

    if (input === "." && this.containDecimalPoint(this.number)) {
      return this.number;
    }

    if (input === "." && this.number === "") {
      this.number = "0.";
      return this.number;
    }

    this.number += input;

    this.prevInput = input;

    return this.removeZero(this.number);
  }

  // Handle all operation other than digit inputs.
  handleOperationInput(input) {
    if (
      input === this.OperationEnum.addition ||
      input === this.OperationEnum.subtraction ||
      input === this.OperationEnum.multiplication ||
      input === this.OperationEnum.division
    ) {
      return this.handleBaiscMathOperation(input);
    }

    if (input === this.OperationEnum.percentage) {
      return this.handlePercentageOperation();
    }

    if (input === this.OperationEnum.sign) {
      return this.handleSignOperation();
    }

    if (input === this.OperationEnum.allClear) {
      return this.handleAllClearOperation();
    }

    if (input === this.OperationEnum.clear) {
      return this.handleClearOperation();
    }

    if (input === this.OperationEnum.equal) {
      return this.handleEqualOperation(input);
    }
  }

  // Only handle basic +, -, /, x operations
  handleBaiscMathOperation(input) {
    this.nextNumber = null;
    this.nextOperation = null;

    if (this.prevNumber == null) {
      this.updatePreviousStatus(this.number, input);
      if (this.number.includes(".") && this.number.length > 9) {
        return Number(this.number).toFixed(3);
      }
      return this.number;
    } else {
      let temp = this.prevInput;
      this.prevInput = input;

      if (
        temp !== input &&
        this.prevOperation !== this.OperationEnum.equal &&
        temp !== "="
      ) {
        if (this.prevOperation === this.OperationEnum.addition) {
          this.number = this.add(this.prevNumber, this.number);
        }
        if (this.prevOperation === this.OperationEnum.subtraction) {
          this.number = this.subtract(this.prevNumber, this.number);
        }
        if (this.prevOperation === this.OperationEnum.multiplication) {
          this.number = this.muliply(this.prevNumber, this.number);
        }
        if (this.prevOperation === this.OperationEnum.division) {
          this.number = this.divide(this.prevNumber, this.number);
        }

        this.updatePreviousStatus(this.number, input);

        if (this.number.includes(".") && this.number.length > 9) {
          return Number(this.number).toFixed(3);
        }

        return this.number;
      } else {
        this.updatePreviousStatus(this.number, input);

        if (this.number.includes(".") && this.number.length > 9) {
          return Number(this.number).toFixed(3);
        }
        return this.number;
      }
    }
  }

  handlePercentageOperation() {
    if (this.number === "") {
      this.number = "0";
    }

    this.number = this.percentage(this.number);

    if (this.number.includes(".") && this.number.length > 9) {
      return Number(this.number).toFixed(3);
    }

    return this.number;
  }

  handleSignOperation() {
    if (this.number === "") {
      this.number = "0";
    }

    this.number = this.changeSign(this.number);

    if (this.number.includes(".") && this.number.length > 9) {
      return Number(this.number).toFixed(3);
    }

    return this.number;
  }

  handleAllClearOperation() {
    return this.allClear();
  }

  handleClearOperation() {
    return this.clear();
  }

  perform(operation) {
    if (this.nextNumber !== null) {
      this.number = operation(this.number, this.nextNumber);
    } else {
      this.nextNumber = this.number;
      this.number = operation(this.prevNumber, this.number);
    }
  }

  handleEqualOperation(input) {
    if (this.prevNumber == null) {
      this.updatePreviousStatus(this.number, input);

      return this.number;
    } else {
      this.prevInput = input;

      if (
        this.prevOperation !== this.OperationEnum.equal &&
        input === this.OperationEnum.equal
      ) {
        let temp = this.number;

        if (this.prevOperation === this.OperationEnum.addition) {
          this.perform(this.add);
        }
        if (this.prevOperation === this.OperationEnum.subtraction) {
          this.perform(this.subtract);
        }
        if (this.prevOperation === this.OperationEnum.multiplication) {
          this.perform(this.muliply);
        }
        if (this.prevOperation === this.OperationEnum.division) {
          this.perform(this.divide);
        }

        this.nextNumber = temp;
        this.nextOperation = this.prevOperation;
        this.prevInput = input;
        this.prevOperation = input;

        if (this.number.includes(".") && this.number.length > 9) {
          return Number(this.number).toFixed(3);
        }
        return this.number;
      } else {
        let temp = this.number;

        if (this.nextNumber != null) {
          if (this.nextOperation === this.OperationEnum.addition) {
            this.number = this.add(this.number, this.nextNumber);
          }
          if (this.nextOperation === this.OperationEnum.subtraction) {
            this.number = this.subtract(this.number, this.nextNumber);
          }
          if (this.nextOperation === this.OperationEnum.multiplication) {
            this.number = this.muliply(this.number, this.nextNumber);
          }
          if (this.nextOperation === this.OperationEnum.division) {
            this.number = this.divide(this.number, this.nextNumber);
          }
        }

        this.updatePreviousStatus(temp, input);

        if (this.number.includes(".") && this.number.length > 9) {
          return Number(this.number).toFixed(3);
        }
        return this.number;
      }
    }
  }

  calculate(input) {
    if (this.isDigit(input)) {
      return this.handleDigitInput(input);
    }

    if (this.isOperation(input)) {
      return this.handleOperationInput(input);
    }

    return "Error";
  }

  isDigit(input) {
    return !isNaN(input) || input === ".";
  }

  isOperation(input) {
    return Object.values(this.OperationEnum).includes(input);
  }

  add(prevNumber, number) {
    return (parseFloat(prevNumber) + parseFloat(number)).toString();
  }

  subtract(prevNumber, number) {
    return (parseFloat(prevNumber) - parseFloat(number)).toString();
  }

  muliply(prevNumber, number) {
    return (parseFloat(prevNumber) * parseFloat(number)).toString();
  }

  divide(prevNumber, number) {
    return (parseFloat(prevNumber) / parseFloat(number)).toString();
  }

  percentage(number) {
    return (parseFloat(number) / 100).toString();
  }

  changeSign(number) {
    return parseFloat(number) === 0
      ? "0"
      : (parseFloat(number) * -1).toString();
  }

  clear() {
    this.prevInput = null;
    this.prevNumber = null;
    this.prevOperation = null;
    this.nextNumber = null;
    this.nextOperation = null;
    this.clearable = false;

    if (this.number.includes(".") && this.number.length > 9) {
      return Number(this.number).toFixed(3);
    }

    return this.number;
  }

  allClear() {
    this.number = "";
    this.prevInput = null;
    this.prevNumber = null;
    this.prevOperation = null;
    this.nextNumber = null;
    this.nextOperation = null;
    this.clearable = false;

    return "0";
  }

  removeZero(number) {
    if (number.length > 1 && number[0] === "0" && number[1] !== ".") {
      return this.removeZero(number.substr(1, number.length));
    }

    return number;
  }

  containDecimalPoint(number) {
    return number.includes(".");
  }
}

export default Engine;
