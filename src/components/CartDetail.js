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
    
    getTotalPrice = () => {
        const {cart} = this.props;
        console.log(Array.from(cart));
        return Array.from(cart).reduce((total, [product, quantity]) => {
             return total + product.price * quantity;
        }, 0);
    }
    
    render() {
        const {cart} = this.props;
        return(
            <div style={styles.cartDetail}>
                <ul style={styles.ul}>
                    {Array.from(cart).map(([product, quantity]) => 
                        <li key={product.name} style={styles.li}>
                            <img alt={product.name} src={product.img} width="60px" height="auto"/>
                            <div>{product.name}</div> 
                            <div>{quantity}</div>
                            <div>{(product.price * quantity).toFixed(2)} €</div>
                        </li>
                        )}
                        <li style={{...styles.li, justifyContent: "right"}}>
                            <span>Total price: {this.getTotalPrice().toFixed(2)} €</span>
                        </li>
                </ul>
            </div>
        );
    }
}

export default CartDetail;