import React from "react";
import $ from "jquery";

class Moviedetails extends React.Component {
  state = {
    movieDetail: {}
  };
  componentDidMount() {
    console.log(this.props.id);
    $.ajax({
      url: "https://www.omdbapi.com/?i=" + this.props.id + "&apikey=a6c7931f",
      success: result => {
        console.log(result);
        if (result) {
          this.setState({
            movieDetail: result
          });
        }
      }
    });
  }
  render() {
    return (
      <div>
        <div className="right" style={{ width: 350 }}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                style={{ maxHeight: 400 }}
                className="activator"
                src={this.state.movieDetail.Poster}
                alt=""
              />
            </div>
            <div className="card-content">
              <span
                className="card-title activator grey-text text-darken-4"
                style={{ overflow: "hidden" }}
              >
                {this.state.movieDetail.Title} - {this.state.movieDetail.Year}
              </span>
              <p>
                <small>
                  <strong>Cast</strong>: {this.state.movieDetail.Actors}
                  <br />
                  <strong>Director</strong>: {this.state.movieDetail.Director}
                </small>
              </p>
            </div>
          </div>
        </div>
        <h4>Plot:</h4>
        <p>{this.state.movieDetail.Plot}</p>
      </div>
    );
  }
}

export default Moviedetails;
