import React from 'react';
import Header from './header/header.component.jsx';
import Footer from './footer/footer.component.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
