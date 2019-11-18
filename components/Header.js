import Link from "next/link";
import "materialize-css/dist/css/materialize.min.css";
import "../components/style.css";
import $ from "jquery";
import React from "react";
if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  require("materialize-css");
}
const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  handleSearchTermSubmit = event => {
    event.preventDefault();
    this.props.searchhandler(this.textInput.value);
  };
  render() {
    console.log(this.props);
    return (
      <nav style={{ backgroundColor: "#f4623a" }}>
        <div className=" container">
          <Link href="/">
            <a className="brand-logo" style={{ paddingLeft: 10 }}>
              Rodeo Travel Technologies
            </a>
          </Link>
          {this.props.showsearch === "true" ? (
            <form
              onSubmit={e => this.handleSearchTermSubmit(e)}
              className="browser-default right"
            >
              <input
                id="search-input"
                placeholder="Type movie name and press enter"
                type="text"
                className="browser-default search-field"
                name="q"
                autoComplete="off"
                aria-label="Search box"
                ref={input => (this.textInput = input)}
              />
              {/* <label for="search-input"><i className="material-icons search-icon">search</i></label>  */}
            </form>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default Header;
