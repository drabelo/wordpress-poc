import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

export class App extends Component {

  render() {
    let blogs;
    if(this.props.blogs) {
      blogs = this.props.blogs.map((element, index) => {
        return (
          <div className="card" key={index}>
            <p className="title" dangerouslySetInnerHTML={{__html: element.title.rendered}}></p>
            <p className="title" dangerouslySetInnerHTML={{__html: element.content.rendered}}></p>
          </div>
        );
      });
    }

    return (
      <div>
          <h1 className="ibm-h1 page-title">Blog</h1>
        {blogs}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { blogs: state.posts.blogs };
};

export default connect(mapStateToProps)(App);