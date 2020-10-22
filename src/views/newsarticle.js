import React from "react";
import "../styles/App.css";
import "../styles/p10Style.css";
import "date-fns";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import { ThemeProvider } from "@material-ui/core";
import InfoStyles from "../styles/infoStyles";
import strings from "../localization";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      width: "96%",
      margin: 10,
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



const NewsArticle  = (props) => {

    const article = props;
    console.log(article);
    const { isLoggedIn } = Authentication();
    const { TopNavigationBar } = NaviBar();
    const { infoStyle } = InfoStyles;
    const classes = useStyles();

    
  
    const ArticlePage = () => {
      return (
        <div className={infoStyle}>
          {TopNavigationBar()}
          <h3>{strings.newspage}</h3>
          <HighlightItem />
        </div>
      );
    };
    const HighlightItem = () => {
        return (
          <Card className={classes.root}>
            <CardHeader
              className={classes.header}
              avatar={<Chip label="Highlight" color="primary" />}
              titleTypographyProps={{ variant: "h4" }}
              title="Halloween party"
            />
            <CardMedia
              className={classes.media}
              image={require("../assets/pexels-wilson-vitorino-3230473.jpg")}
              title="Halloween"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Nokia halloween party this saturday at dream cafe!
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography>October 20, 2020</Typography>
              <IconButton aria-label="Vote Up" className={classes.thumbsup}>
                <ThumbUpIcon style={{ color: green[500] }} />
              </IconButton>
              <IconButton aria-label="Vote down" className={classes.thumbsdown}>
                <ThumbDownIcon style={{ color: red[500] }} />
              </IconButton>
            </CardActions>
          </Card>
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