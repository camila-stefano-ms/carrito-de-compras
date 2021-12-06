import { Component } from "react";
const styles = {
  button: {
    backgroundColor: "#33AD73",
    color: "#FFF",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />; //con el spread operator le pasamos las propiedades del componente Button, en este caso el onClick
  }
}

export default Button;
