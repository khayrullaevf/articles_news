/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const SingleNews = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
  }, [id]);

  async function fetchArticle(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticle(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const calculateTimeAgo = (publishedDate) => {
    const currentDate = new Date();
    const articleDate = new Date(publishedDate);
    const timeDifference = currentDate - articleDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 365) {
      return `${days} days ago`;
    } else {
      return `${years} years ago`;
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="mt-5 mb-5 ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: "90%" }}>
            <img
              src={article?.imageUrl}
              alt={article?.id}
              style={{ height: "500px" }}
            />
            <div className="card-body">
              <h1>{article?.title}</h1>
              <p>{article?.summary}</p>
              <p style={{ color: "#898989" }}>
                {calculateTimeAgo(article?.publishedAt)}
              </p>
              <Link to="/" style={{ color: "blue", textDecoration: "none" }}>
                {`<-Back to home`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
