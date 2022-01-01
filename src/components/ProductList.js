import { Component } from "react";
import Product from "./Product";

const styles = {
    productList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
}

class ProductList extends Component {
    render() {
        const {products, addToCart} = this.props
        return(
            <div style={styles.productList}>
                {products.map(product => 
                    <Product
                        product={product}
                        addToCart={addToCart}
                        key={product.name}
                    />
                )}
            </div>
        )
    }
}

export default ProductList;