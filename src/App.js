import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  state = {
    results: [],
    links: []
  };

  handleData = (input) => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&format=json&origin=*&limit=10`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ ...this.state, results: data[1], links: data[3] })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1>
            <img
              className="img"
              src="https://melissaagnes.com/wp-content/uploads/2015/01/wikipedia-logo.png"
              alt="logo"
            />
            Wikipedia Search with Class Component
          </h1>
        </div>
        <Form handleData={this.handleData} />
        {this.state.results.map((item, index) => {
          return (
            <li key={index}>
              <a href={this.state.links[index]}>{item}</a>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
