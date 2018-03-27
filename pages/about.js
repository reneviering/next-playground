import React from 'react';

import '../index.less';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    }, 1000);
  }

  render() {
    return (<p>{this.state.counter}</p>);
  }
}

export default () => (
  <div>
    <h3>About</h3>
    <Counter/>
    <img src="/static/nyancat.png"/>
  </div>
);
