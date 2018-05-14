import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Switch, Route, HashRouter } from "react-router-dom";

import store from "./store";

import App from "./containers/App";
import SuccessStories from "./containers/Stories";
import Blog from "./containers/Blog";
import NotFound from "./containers/NotFound";
import SingleBlogPage from "./containers/SingleBlogPage";
import SingleStoryPage from "./containers/SingleStoryPage";

import "./index.css";

import { setStories, setBlogs } from "actions/posts";

fetch(
  "http://173.193.75.102:30180/wp-json/wp/v2/posts?filter[category_name]=success-stories"
)
  .then(response => response.json())
  .then(responseJson => {
    store.dispatch(setStories({ value: responseJson }));
  });

fetch(
  "http://173.193.75.102:30180/wp-json/wp/v2/posts?filter[category_name]=blog"
)
  .then(response => response.json())
  .then(responseJson => {
    store.dispatch(setBlogs({ value: responseJson }));
  });

ReactDOM.render(
  <div>
    <div id="ibm-masthead" role="banner" aria-label="IBM">
      <div id="ibm-mast-options">
        <ul role="toolbar" aria-labelledby="ibm-masthead">
          <li id="ibm-geo" role="presentation">
            <a href="//www.ibm.com/planetwide/select/selector.html">
              United States
            </a>
          </li>
        </ul>
      </div>
      <div id="ibm-universal-nav">
        <div id="ibm-home">
          <a href="//www.ibm.com/us-en/">IBM®</a>
        </div>
      </div>
    </div>

    <div className="ibm-sitenav-menu-container">
      <div className="ibm-sitenav-menu-name">
        <a href="#">Testing POC</a>
      </div>
      <div className="ibm-sitenav-menu-list">
        <ul role="menubar">
          <li role="presentation">
            <a role="menuitem" href="#23">
              What we do
            </a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#stories">
              Stories
            </a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/23" component={App} />
            <Route exact path="/stories" component={SuccessStories} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={SingleBlogPage} />
            <Route path="/story/:id" component={SingleStoryPage} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
    <div id="ibm-footer-module" />
    <footer role="contentinfo" aria-label="IBM">
      <div id="ibm-footer">
        <h2 className="ibm-access">Footer links</h2>
        <ul>
          <li>
            <a href="//www.ibm.com/contact/us/en/">Contact</a>
          </li>
          <li>
            <a href="//www.ibm.com/privacy/us/en/">Privacy</a>
          </li>
          <li>
            <a href="//www.ibm.com/legal/us/en/">Terms of use</a>
          </li>
          <li>
            <a href="//www.ibm.com/accessibility/us/en/">Accessibility</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>,
  document.getElementById("root")
);
