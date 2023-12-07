import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + " Constructor");
  }
  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  render() {
    const { count } = this.state;
    console.log(this.props.name + " render");
    return (
      <div className="user-class-alt">
        <h4>User class </h4>
        <h4>Count : {count}</h4>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increment
        </button>
      </div>
    );
  }
}
export default UserClass;
