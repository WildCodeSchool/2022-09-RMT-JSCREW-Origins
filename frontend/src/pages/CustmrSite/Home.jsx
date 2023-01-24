import React from "react";
import { Helmet } from "react-helmet";
import Header from "@components/Header";
import TemplateCstmrSlider1 from "@components/TemplateCstmrSlider1";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Home</title>
        <meta
          name="description"
          content="home page of origin's website, you can find videos and pictures of Esport"
        />
      </Helmet>
      <div className="bg-primary">
        <Header />
        <TemplateCstmrSlider1 url="/slider" />
      </div>
    </>
  );
}

export default Home;
