import React from "react";

export interface IProps {}
export interface IState {
  value: any;
  timer: number;
}
export class Lines extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: 0,
      timer: 0,
    };
  }

  componentDidMount() {
    let time = setInterval(() => {
      this.setState({ value: this.state.value + 1 });
    }, 1000);
    if (this.state.value == 0) {
      return time;
    } else {
      return clearInterval(time);
    }
  }
  render() {
    return (
      <div>
        <input
          type="range"
          min="0"
          max={this.state.value - 10}
          value={this.state.value + 1}
        />
        {this.state.value}
      </div>
    );
  }
}

export default Lines;
