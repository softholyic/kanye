import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          quote: json
        })
      });

  }

  render() {
    var { isLoaded, quote } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">

          <ul>
            <li>{quote.quote}</li>
          </ul>

        </div>
      );

    }


  }
}

export default App;
