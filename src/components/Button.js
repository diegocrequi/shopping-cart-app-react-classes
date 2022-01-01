import { Component } from "react";

const styles = {
    button: {
        backgroundColor: "#0A283E",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
        padding: "10px 15px",
        cursor: "pointer"
    }
}

class Button extends Component {
    render() {
        return <button style={styles.button} {...this.props}/>;
    }
}

export default Button;