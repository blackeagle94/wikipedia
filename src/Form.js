import React from "react";

class Form extends React.Component {
  onSubmit = (e) => {
    let inputValue = document.getElementById("input").value;
    e.preventDefault();
    this.props.handleData(inputValue);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          id="input"
          type="text"
          placeholder="Enter what you want to learn..."
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Form;
