import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsSinceMount: 0 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        Seconds since mount: {this.state.secondsSinceMount}
      </div>
    );
  }
}
