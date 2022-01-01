import { Component} from "react";
import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      {name: "Tomatoes", price: 1.79, img: "/products/tomato.jpg"},
      {name: "Lettuce", price: 0.79, img: "/products/lettuce.jpg"},
      {name: "Peas", price: 1.85, img: "/products/peas.jpg"}
    ],
    cart: new Map()
  };

  addToCart = (product) => {
    const {cart} = this.state;
    if(Array.from(cart.keys()).find(p => p.name === product.name)) {
      cart.set(product, cart.get(product) + 1);
    } else {
      cart.set(product, 1);
    }
    this.setState({cart: cart});
  }
  
  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />
        <Layout>
          <Title>Shop items</Title>
          <ProductList products={this.state.products}
            addToCart={this.addToCart}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
