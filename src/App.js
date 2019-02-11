import React, { Component } from "react";
import { Counter } from "./components/counter";
import { Counter1 } from "./components/counter1";
import {FriendListItem} from './components/FriendList'

class App extends Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <Counter initialCount={10} />
        <Counter1 initialCount={5} />
        <FriendListItem friend={{id:0,name:'janden'}} />
      </div> 
    );
  }
}

export default App;
