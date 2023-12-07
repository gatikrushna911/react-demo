import React from "react";
import UserClass from "./UserClass";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="user-alt">
        <h4>Name : Gatikrushna Ojha</h4>
        <h4>Location : Bhubaneswar</h4>
        <h4>Marital Status : Married</h4>
        <h4>Count : {this.state.count}</h4>
        <UserClass name="Child 1"></UserClass>
      </div>
    );
  }
}

export default User;
