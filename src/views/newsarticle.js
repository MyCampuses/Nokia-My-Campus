import React, { useState, useEffect } from "react";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import NewsItem from "../fragments/NewsItem";
import { useQueryParams } from "hookrouter";


// This is the news article page for viewing the detailed article user has selected
const NewsArticle = () => {
  // queryParams are arguments sent to the page when navigating. It holds the article
  const [queryParams] = useQueryParams();

  //State of the page. 
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
  
  // Hook triggering the state change
  useEffect(() => {
    //eslint-disable-line
    //Getting the article object pushed to the page with queryparams
    const { article = {} } = queryParams;
    //Updating the article state.
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

  // Function rendering the page
  const ArticlePage = () => {
    return (
      <div>
        {TopNavigationBar()}
        <NewsItem articleData = {articleData}/>
      </div>
    );
  };

  //Checking if the user is logged in
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
