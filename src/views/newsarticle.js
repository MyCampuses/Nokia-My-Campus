import React, { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/p10Style.css";
import "date-fns";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import NewsItem from "../fragments/NewsItem";
import { useQueryParams } from "hookrouter";
import InfoStyles from "../styles/infoStyles";



const NewsArticle = (props) => {
  const [queryParams] = useQueryParams();
  const infoStyle = InfoStyles();

  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    highlight: false,
    timestamp: "",
    imgUrl: "",
    imgTitle: "",
    paragraphs: {},
    paragraphImg: {},
  });
  
  useEffect(() => {
    //eslint-disable-line
    const { article = {} } = queryParams;
    setArticleData({
      title: article.title,
      description: article.description,
      highlight: article.highlight,
      timestamp: article.timestamp,
      imgUrl: article.imgUrl,
      imgTitle: article.imgTitle,
      paragraphs: article.paragraphs,
      paragraphImg: article.paragraphImg,
    });
    
  }, [queryParams]);

  const { isLoggedIn } = Authentication();
  const { TopNavigationBar } = NaviBar();


  const ArticlePage = () => {
    return (
      <div className={infoStyle}>
        {TopNavigationBar()}
        <NewsItem articleData = {articleData}/>
      </div>
    );
  };

  const AuthArticle = () => {
    //eslint-disable-line

    if (isLoggedIn()) {
      return <ArticlePage />;
    } else {
      return <AuthLoading />;
    }
  };

  return <AuthArticle />;
};

export default NewsArticle;
