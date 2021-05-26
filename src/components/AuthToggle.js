import { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";

class AuthToggle extends Component {
  static contextType = AuthContext;

  render() {
    console.log(this.context);
    const { toggleAuth } = this.context;

    return (
      <button onClick={toggleAuth} className="toggle-btn">
        Toggle Auth
      </button>
    );
  }
}

export default AuthToggle;
