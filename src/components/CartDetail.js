import { Component } from "react";

const styles = {
    cartDetail: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: "30px",
        width: "300px",
        boxShadow: "1px 5px 5px rgb(0, 0, 0, 0.3)",
        borderRadius: "5px",
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    li: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        borderBottom: "1px solid #aaa"
    }
}

class CartDetail extends Component {
    render() {
        const {cart} = this.props;
        return(
            <div style={styles.cartDetail}>
                <ul style={styles.ul}>
                    {cart.map(product => 
                        <li key={product.name} style={styles.li}>
                            <img alt={product.name} src={product.img} width="60px" height="auto"/>
                            <div>{product.name}</div> 
                            <div>{product.quantity}</div>
                        </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default CartDetail;