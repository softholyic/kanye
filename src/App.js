import React, { Component } from 'react';
import './App.css';
import { Kanye_1, Kanye_2, Kanye_3, Kanye_4, Kanye_5, Kanye_6, Kanye_7, Kanye_8, Kanye_9, Kanye_10 } from './kanyePics';

let ye = [Kanye_1, Kanye_2, Kanye_3, Kanye_4, Kanye_5, Kanye_6, Kanye_7, Kanye_8, Kanye_9, Kanye_10];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isLoaded: false,
      counter: 0
    }

    this.reload = this.reload.bind(this);
    this.background = this.background.bind(this);
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

  reload() {
    this.background();
    //window.location.reload();
    this.componentDidMount();
  }
  background = () => {


    if (this.state.counter <= 10) {



      this.setState({
        counter: this.state.counter + 1
      })
    } else {
      this.setState({
        counter: 0
      })
    }
  }



  render() {
    var { isLoaded, quote } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <div className="App">

          <div className="kanye-background" style={{
            backgroundImage: `url(${ye[this.state.counter]})`, backgroundPosition: 'center',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
          }}>
          </div >
          <div className="Quote">

            <p>{quote.quote}</p>

          </div>






          <button className="btn-primary btn" onClick={this.reload}>Quote</button>

        </div>

      );

    }


  }

}





export default App;
