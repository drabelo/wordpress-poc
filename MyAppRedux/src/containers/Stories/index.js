import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

export class App extends Component {
  render() {
    let stories;
    if (this.props.stories) {
      stories = this.props.stories.map((element, index) => {
        return (
          <div className="stories-card" key={index}>
            <p
              className="stories-title"
              dangerouslySetInnerHTML={{ __html: element.title.rendered }}
            />
            <p
              className="stories-title"
              dangerouslySetInnerHTML={{ __html: element.content.rendered }}
            />
          </div>
        );
      });
    }

    return (
      <div>
        <p>
          <h1 className="ibm-h1 page-title">Team Stories</h1>
        </p>
        {stories}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stories: state.posts.stories };
};

export default connect(mapStateToProps)(App);
