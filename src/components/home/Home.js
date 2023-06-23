import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b8860ca301554eaaba2753962d8e7529"
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.homeHeader}>
        <span className={classes.welcomeHeader}>WELCOME TO BULETIN</span>
        <span className={classes.welcomeHeader1}>
          <span style={{ fontWeight: "bolder" }}>Craft Narratives</span>
          <img src="/hand.png" style={{ width: "30px", height: "30px" }} />
          <span style={{ fontWeight: "bolder" }}>that ignite</span>
          {"  "}
          <span
            style={{ fontWeight: "bolder", color: "red", marginLeft: "10px" }}
          >
            inspiration
          </span>
          <img style={{ width: "30px", height: "30px" }} src="/bulb.png" />
        </span>
        <span className={classes.welcomeHeader2}>
          <span
            style={{ fontWeight: "bolder", color: "red", marginLeft: "10px" }}
          >
            knowledge
          </span>
          <img src="/book.png" style={{ width: "30px", height: "30px" }} />
          <span style={{ fontWeight: "bolder" }}>,and</span>
          <span
            style={{ fontWeight: "bolder", color: "red", marginLeft: "10px" }}
          >
            entertainment
          </span>
          <img src="/cutt.png" style={{ width: "30px", height: "30px" }} />
        </span>
      </div>
      {articles.length && (
        <div className={classes.homeHeadLine}>
          <div className={classes.homeHeadLineImg}>
            <img
              style={{ width: "100%", margin: "0 auto", borderRadius: "8px" }}
              src={articles[0].urlToImage}
            />
          </div>
          <div className={classes.homeHeadLinedata}>
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div>
                <span
                  style={{
                    color: "hsl(0deg 0.87% 45.1%)",
                    fontSize: "0.8rem",
                    marginRight: "1em",
                  }}
                >
                  {articles[0].source.name}
                </span>
                <span
                  style={{
                    color: "hsl(0deg 0.87% 45.1%)",
                    fontSize: "0.8rem",
                    marginRight: "1em",
                  }}
                >
                  {articles[0].publishedAt}
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "hsl(210deg 9.3% 16.86%)",
                    fontSize: "2.2rem",
                    fontWeight: "bolder",
                  }}
                >
                  {articles[0].title}
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "hsl(0deg 0.87% 45.1%)",
                    fontSize: "1rem",
                  }}
                >
                  {articles[0].description}
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "hsl(0deg 0.87% 45.1%)",
                    fontSize: "0.8rem",
                    marginRight: "1em",
                  }}
                >
                  {articles[0].source.name}
                </span>
                <span
                  style={{
                    color: "hsl(0deg 0.87% 45.1%)",
                    fontSize: "0.8rem",
                    marginRight: "1em",
                  }}
                >
                  4 Min
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {articles.length && (
        <div className={classes.homeLatests}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "2rem", fontWeight: "bolder" }}>
              Latest News
            </span>
            <a href="/see-all" style={{ textDecoration: "none" }}>
              See All
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {articles.map((item, index) => {
              if (index < 4) {
                return (
                  <div
                    style={{
                      width: "20%",
                      margin: "1em auto",
                      height: "300px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ height: "50%" }}>
                      <img
                        src={item.urlToImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "1em" }}>
                      <div style={{ margin: "0.5em auto" }}>
                        <span
                          style={{
                            color: "hsl(0deg 0.87% 45.1%)",
                            fontSize: "0.5rem",
                            marginRight: "1em",
                          }}
                        >
                          {articles[0].source.name}
                        </span>
                        <span
                          style={{
                            color: "hsl(0deg 0.87% 45.1%)",
                            fontSize: "0.5rem",
                            marginRight: "1em",
                          }}
                        >
                          {articles[0].publishedAt}
                        </span>
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
