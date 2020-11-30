import React from "react";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import NewsItem from "../fragments/NewsItem";
import { useSelector } from 'react-redux';


// This is the news article page for viewing the detailed article user has selected
const NewsArticle = () => {
  // queryParams are arguments sent to the page when navigating. It holds the article
  const currentNews = useSelector(state => state.NewsReducer);
  console.log("current news", currentNews)
  
  // Hook triggering the state change
  console.log(currentNews)
  const { isLoggedIn } = Authentication();
  const { TopNavigationBar } = NaviBar();

  // Function rendering the page
  const ArticlePage = () => {
    return (
      <div>
        {TopNavigationBar()}
        <NewsItem articleData = {currentNews}/>
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
