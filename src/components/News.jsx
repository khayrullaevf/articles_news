import React, { useEffect } from "react";
import { fetchData } from "../redux/slice/fetchSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loading";

// ... (imports)

const News = () => {
  const dispatch = useDispatch();
  const articlesState = useSelector((state) => state.getData);
  const loading = articlesState.loading;

  useEffect(() => {
    dispatch(fetchData("https://api.spaceflightnewsapi.net/v3/articles"));
  }, [dispatch]);

  if (loading) {
    return <Loading/> // Render a loading message or spinner while fetching data
  }

  return (
    <div className="container ">
      <h1 className="text-center mt-5">News</h1>
      <div className="articles ">
        <div className="row ">
          {articlesState.data.map((article, index) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3  "
              style={{ marginTop: "50px", marginBottom: "40px" }}
              key={index}
            >
              <Link
                to={`/news/${article.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card card-1">
                  <img
                    src={article?.imageUrl}
                    className="card-img-top"
                    alt={article.id}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      {article.title.slice(0, 50)}...
                    </h5>
                    <p className="card-text">
                      {article.summary.slice(0, 100)}...
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Published on: {new Date(article.publishedAt).toLocaleDateString()}
                      </small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default News;
