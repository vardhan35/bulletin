import React, { useEffect, useState } from "react";
import classes from "./SeeAll.module.css";

const SeeAll = () => {
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
    <div style={{ width: "80%", margin: "auto" }}>
      {articles &&
        articles.map((item) => {
          return (
            <div className={classes.homeHeadLine}>
              <div className={classes.homeHeadLineImg}>
                <img
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    borderRadius: "8px",
                  }}
                  src={item.urlToImage}
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
                      {item.source.name}
                    </span>
                    <span
                      style={{
                        color: "hsl(0deg 0.87% 45.1%)",
                        fontSize: "0.8rem",
                        marginRight: "1em",
                      }}
                    >
                      {item.publishedAt}
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
                      {item.title}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        color: "hsl(0deg 0.87% 45.1%)",
                        fontSize: "1rem",
                      }}
                    >
                      {item.description}
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
                      {item.source.name}
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
          );
        })}
    </div>
  );
};

export default SeeAll;
