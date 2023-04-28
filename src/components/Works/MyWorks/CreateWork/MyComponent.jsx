import plus from "../../../../pichers/plus_PNG100.png";
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false, // начальное состояние
    };
  }

  handleClick = () => {
    // обработчик события клика на кнопке
    this.setState({ isClicked: true }); // обновляем состояние
  };

  render() {
    const { isClicked } = this.state; // получаем текущее состояние
    const className = isClicked ? "newWork clicked" : "newWork"; // условное применение класса
    return (
      <a onClick={this.handleClick} className={className} href="#">
        <div className="work">
          <div className="pic">
            <img src={plus} alt="#" />
          </div>
        </div>
      </a>
    );
  }
}

export default MyComponent;