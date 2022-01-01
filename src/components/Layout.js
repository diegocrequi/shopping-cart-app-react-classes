import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: "#fff",
        color: "#0A283E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    container: {
        width: "80%"
    }
}

class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;