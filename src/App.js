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
    cart: [
      // {name: "Tomatoes", price: 1.79, img: "/products/tomato.jpg", quantity: 1},
    ]
  };

  addToCart = (product) => {
    const cart = this.state.cart;
    if(cart.find(p => p.name === product.name)) {
      const newCart = cart.map(p => p.name === product.name ?
        {...p, quantity: p.quantity + 1} 
        : p);
      this.setState({cart: newCart});
    } else {
      this.setState({
        cart: [...cart, {...product, quantity: 1}]
      });
    }
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
