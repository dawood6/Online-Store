import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import "./Home.css";
import Counter from "./counter";

class Home extends Component {
  state = {
    clickValue: 0,
  };

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="product-card" key={item.id}>
          <div className="product-tumb">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="product-details">
            <h4>{item.title}</h4>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
                this.setState({ clickValue: this.state.clickValue + 1 });
              }}
            >
              <i className="material-icons">add</i>
            </span>
            <p>{item.desc}</p>
            <div className="product-bottom-details">
              <div className="product-price">{item.price}</div>
              <div className="product-links">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <span className="counter">
          <Counter clickValue={this.state.clickValue}></Counter>
        </span>
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
