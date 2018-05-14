import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

export class App extends Component {
  render() {
    let stories;
    if (this.props.stories) {
      stories = (
        <div className="card">
          <p
            className="title"
            dangerouslySetInnerHTML={{
              __html: this.props.stories[this.props.match.params.id].title
                .rendered
            }}
          />
          <p
            className="title"
            dangerouslySetInnerHTML={{
              __html: this.props.stories[this.props.match.params.id].content
                .rendered
            }}
          />
        </div>
      );
    }

    return (
      <div>
        <h1 className="ibm-h1 page-title">Story</h1>
        {stories}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stories: state.posts.stories };
};

export default connect(mapStateToProps)(App);
