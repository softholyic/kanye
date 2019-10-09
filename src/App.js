import React, { Component } from 'react';
import './App.css';
import { Kanye_1, Kanye_2, Kanye_3, Kanye_4, Kanye_5, Kanye_6, Kanye_7, Kanye_8, Kanye_9, Kanye_10 } from './kanyePics';

let ye = [Kanye_1, Kanye_2, Kanye_3, Kanye_4, Kanye_5, Kanye_6, Kanye_7, Kanye_8, Kanye_9, Kanye_10];
let authorKanye=['Ye','Kanye','KanYE','Kanye West','Pablo','Yeezy','Yeezus','Ye','Kanye to the','Mr. West'
,'Kan The Louis Vuitton Don','The Don','Martin Louis the King, Jr.','KanYeezy','The LeBron of Rhyme','K-Rock'
,'Omari','Mari','The Black Zac Efron','Evel Kanyevel','Swag King Cole']

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: "",
      isLoaded: false,
      counter: 0,
      authorCounter:0
    }

    this.reload = this.reload.bind(this);
    this.background = this.background.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote(){
    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          quote: json,
          author: authorKanye[this.state.authorCounter]
        })
      });
  }

  reload() {
    this.background();
    this.author();
    this.getQuote();
    
  }
  background = () => {


    if (this.state.counter <= 8) {
      this.setState({
        counter: this.state.counter + 1
      })
    } else{
      this.setState({
        counter: 0
      })
    }
  }

  author = () => {
    if(this.state.authorCounter <= 20) {
      this.setState({
        authorCounter: this.state.authorCounter + 1
      })
    }else {
      this.setState({authorCounter: 0})
    }
  }



  render() {
    var { isLoaded, quote, author} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <div id="quote-box" className="App">

          <div className="kanye-background" style={{
            backgroundImage: `url(${ye[this.state.counter]})`, backgroundPosition: 'center',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
          }}>
          </div >
          

            <p id="text">{quote.quote}</p>
            <div id="author"> {author} </div>


          

          <a target="_blank" id="tweet-quote" href="www.twitter.com/intent/tweet" >Tweet</a>
          <button id="new-quote" className="btn" onClick={this.reload}>Quote</button>

        </div>

      );

    }


  }

}





export default App;
