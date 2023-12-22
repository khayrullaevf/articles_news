import React, { useEffect } from "react";
import { fetchData } from "../redux/slice/fetchSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const News = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.getData);

  useEffect(() => {
    dispatch(fetchData("https://api.spaceflightnewsapi.net/v3/articles"));
  });

  return (
    <div  className="container ">
      <h1 className="text-center mt-5">News</h1>
      <div className="articles ">
        <div className="row ">
          {articles?.data.map((article, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  " style={{marginTop:'50px', marginBottom:'40px'}} key={index}>
              <div className="card">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
