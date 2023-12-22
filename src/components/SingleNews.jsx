/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleNews = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
  }, [id]);

  async function fetchArticle(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5">Single News Page</h2>
      <div className="mt-5 mb-5 ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: "90%" }}>
            <img src={article?.imageUrl} alt={article?.id} />
            <div className="card-body">
              <h1>{article?.title}</h1>
              <p>{article?.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
