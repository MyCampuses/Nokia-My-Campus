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
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Chip from "@material-ui/core/Chip";
import { useQueryParams } from "hookrouter";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    width: "96%",
    margin: 10,
    justifyContent: "center",
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
}));

const NewsArticle = (props) => {
  const [queryParams] = useQueryParams();

  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    timestamp: "",
    imgUrl: "",
    imgTitle: "",
    paragraphs: [],
  });
  
  useEffect(() => {
    //eslint-disable-line
    const { article = {} } = queryParams;
    setArticleData({
      title: article.title,
      description: article.description,
      timestamp: article.timestamp,
      imgUrl: article.imgUrl,
      imgTitle: article.imgTitle,
      paragraphs: article.paragraphs,
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
        <CardHeader
          className={classes.header}
          avatar={<Chip label="Highlight" color="primary" />}
          titleTypographyProps={{ variant: "h4" }}
          title={articleData.title}
        />
        <CardMedia
          className={classes.media}
          image={articleData.imgUrl}
          title={articleData.imgTitle}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {articleData.description}
          </Typography>
          {(articleData.paragraphs || []).map(paragraph => (
            <Typography key={paragraph} variant="body2" color="textSecondary" component="p">{paragraph}</Typography>
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <Typography>{articleData.timestamp}</Typography>
          <IconButton aria-label="Vote Up" className={classes.thumbsup}>
            <ThumbUpIcon style={{ color: green[500] }} />
          </IconButton>
          <IconButton aria-label="Vote down" className={classes.thumbsdown}>
            <ThumbDownIcon style={{ color: red[500] }} />
          </IconButton>
        </CardActions>
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
