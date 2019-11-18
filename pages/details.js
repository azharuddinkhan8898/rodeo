import Layout from "../components/Layout";
import { useRouter } from "next/router";
import React from "react";
import $ from "jquery";
import Moviedetails from "../components/moviedetailpage";

const Details = () => {
  const router = useRouter();

  const searchHandler = e => {
    $.ajax({
      url: "https://www.omdbapi.com/?s=" + e + "&apikey=a6c7931f",
      success: result => {
        console.log(result.Search);
        if (result.Search) {
          // this.setState({
          //   movies: result.Search
          // });
        }
      }
    });
  };
  return (
    <Layout>
      <div
        className="container"
        showsearch="false"
        searchhandler={searchHandler}
      >
        <Moviedetails id={router.query.id} />
      </div>
    </Layout>
  );
};

export default Details;
