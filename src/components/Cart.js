import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetail from "./CartDetail";

const styles = {
    cart: {
        border: "none",
        borderRadius: "15px",
        backgroundColor: "#359A2C",
        color: "#fff",
        padding: "15px",
        cursor: "pointer"
    },
    bubble: {
        position: "relative",
        left: "12px",
        top: "20px"
    }
}

class Cart extends Component {
    state = {
        isCartDetailShowed: false
    }

    getNumberOfProducts = (cart) => {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
    }

    showCartDetail = () => {
        if(this.props.cart.length > 0)
            this.setState({isCartDetailShowed: !this.state.isCartDetailShowed});
    }

    render() {
        const {cart} = this.props;
        const totalQuantity = this.getNumberOfProducts(cart);
        return (
            <div>
                <span style={styles.bubble}>
                    {totalQuantity > 0 ?
                    <BubbleAlert value={totalQuantity} />
                    : null}
                </span>
                <button style={styles.cart} onClick={this.showCartDetail}>
                    Cart
                </button>
                {this.state.isCartDetailShowed ?
                <CartDetail cart={cart} />
                 : null}
            </div>
        );
    }
}

export default Cart;