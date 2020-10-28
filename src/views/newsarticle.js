import React, { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/p10Style.css";
import "date-fns";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import { ThemeProvider } from "@material-ui/core";
import InfoStyles from "../styles/infoStyles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import Chip from "@material-ui/core/Chip";
import { useQueryParams } from "hookrouter";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  thumbsup: {
    marginLeft: "auto",
    colorPrimary: green,
  },
  thumbsdown: {
    colorPrimary: red,
  },
  avatar: {
    backgroundColor: blue[900],
    color: "primary",
  },
  header: {
    fontSize: "large",
  },
  typography:{
    textAlign: "left",
    margin: 10,
  },
  cardactions: {
    justifyContent: "space-between"
  },
}));

const NewsArticle = (props) => {
  const [queryParams] = useQueryParams();

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
  const { infoStyle } = InfoStyles;
  const classes = useStyles();
  
  //updateItems();

  const ArticlePage = () => {
    return (
      <div className={infoStyle}>
        {TopNavigationBar()}
        <NewsItem />
      </div>
    );
  };
  const NewsItem = () => {
    return (
      <ThemeProvider> 
      <Paper elevation = {0} className={classes.root}>
        <CardActions disableSpacing className = {classes.cardactions}>
          <Typography>{articleData.timestamp}</Typography>
          {articleData.highlight !== false ? <Chip label="Highlight" color="primary" /> : <div/>}
        </CardActions>
        <CardMedia
          className={classes.media}
          image={articleData.imgUrl}
          title={articleData.imgTitle}
        />
        <CardHeader
          className={classes.header}
          titleTypographyProps={{ variant: "h4" }}
          title={articleData.title}
        />
        <CardContent>
          {(Object.keys(articleData.paragraphs) || {}).map(paragraph => (
           <>
            {articleData.paragraphImg[paragraph] &&
            <CardMedia
                className={classes.media}
                image={articleData.paragraphImg[paragraph]}
            />}
            <Typography className = {classes.typography} key={paragraph} variant="body2" color="textSecondary" component="p">{articleData.paragraphs[paragraph]}</Typography>
            </>
          ))}
        </CardContent>
      </Paper>
      </ThemeProvider>
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
