import Layout from "../components/Layout";
import React from "react";
import $ from "jquery";
import Movielist from "./../components/movielist";
import Loader from '../components/Loader'

class Index extends React.Component {
  state = {
    movies: [],
    loader:false,
    mainmsg:"Search for the movie."
  };
  searchHandler = e => {
    this.setState({
      loader:true
    })
    $.ajax({
      url: "https://www.omdbapi.com/?s=" + e + "&apikey=a6c7931f",
      success: result => {
        console.log(result.Search);
        this.setState({
          loader:false
        })
        if (result.Search) {
          this.setState({
            movies: result.Search
          });
        }
        else{
          this.setState({
            mainmsg:"No movie found."
          })
        }
      }
    });
  };
  render() {
    return (
      <Layout>
        <div
          className="container"
          showsearch="true"
          searchhandler={e => this.searchHandler(e)}
        >
          {this.state.movies.length === 0 ? (
            <p className="center">{this.state.mainmsg}</p>
          ) : (
            <div className="row" style={{ paddingTop: 20 }}>
              <Movielist movies={this.state.movies} />
            </div>
          )}
          {this.state.loader ? <Loader/> : null}
          
        </div>
        
      </Layout>
    );
  }
}

export default Index;
