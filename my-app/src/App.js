import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
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
            <ul id="ibm-menu-links" role="toolbar" aria-label="Site map">
              <li>
                <a href="//www.ibm.com/sitemap/us/en/">Site map</a>
              </li>
            </ul>

            <div
              id="ibm-search-module"
              role="search"
              aria-labelledby="ibm-masthead"
            >
              <form
                id="ibm-search-form"
                action="//www.ibm.com/Search/"
                method="get"
              >
                <p>
                  <label for="q">
                    <span className="ibm-access">Search</span>
                  </label>
                  <input type="text" maxlength="100" value="" name="q" id="q" />
                  <input type="hidden" value="17" name="v" />
                  <input type="hidden" value="utf" name="en" />
                  <input type="hidden" value="en" name="lang" />
                  <input type="hidden" value="us" name="cc" />
                  <input
                    type="submit"
                    id="ibm-search"
                    className="ibm-btn-search"
                    value="Submit"
                  />
                </p>
              </form>
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
                <a role="menuitem" href="#">
                  What we do
                </a>
              </li>
              <li role="presentation">
                <a role="menuitem" href="#">
                  Team
                </a>
              </li>
              <li role="presentation">
                <a role="menuitem" href="#">
                  Stories
                </a>
              </li>
              <li role="presentation">
                <a role="menuitem" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
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
      </div>
    );
  }
}

export default App;
