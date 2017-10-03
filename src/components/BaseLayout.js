import React, { Component } from "react";
class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <a href="/">Home</a>

            <a href="/books">Books</a>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
