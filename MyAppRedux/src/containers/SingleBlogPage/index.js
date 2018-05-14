import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

export class App extends Component {
  render() {
    let blog;
    if (this.props.blogs) {
      blog = (
        <div className="card">
          <p
            className="title"
            dangerouslySetInnerHTML={{
              __html: this.props.blogs[this.props.match.params.id].title
                .rendered
            }}
          />
          <p
            className="title"
            dangerouslySetInnerHTML={{
              __html: this.props.blogs[this.props.match.params.id].content
                .rendered
            }}
          />
        </div>
      );
    }

    return (
      <div>
        <h1 className="ibm-h1 page-title">Blog</h1>
        {blog}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { blogs: state.posts.blogs };
};

export default connect(mapStateToProps)(App);
