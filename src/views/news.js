/* eslint-disable no-unused-vars */

import React from "react";
import "../styles/App.css";
import "../styles/p10Style.css";
import "date-fns";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import {ThemeProvider} from "@material-ui/core";
import strings from "../localization";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from "@material-ui/core/Chip";
import MuiThemes from '../styles/muiThemes';
import {CssBaseline} from '@material-ui/core';

// Testing grid list
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { navigate } from "hookrouter";

/*eslint-enable */

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

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: 10,
    maxWidth: 1000,
    maxHeight: 1000,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const News = () => {
  const {PageTheme} = MuiThemes();
  const { isLoggedIn } = Authentication();
  const { TopNavigationBar } = NaviBar();
  const classes = useStyles();

  const NewsPage = () => {
    return (
      <ThemeProvider Theme = {PageTheme}>
        <CssBaseline/>
        {TopNavigationBar()}
        
        <HighlightItem />
        <Typography variant="h5" color="textSecondary" component="h3" margin="10" >
              {"Selaa Uutisia"}
        </Typography>
        <SingleLineGridList />
      </ThemeProvider>
    );
  };

  const HighlightItem = () => {
    const highlight = {
      title: "Halloween party",
      description: "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
      timestamp: "October 20, 2020",
      imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      imgTitle: "Halloween Party",
      paragraphs: ["This is the world we live in", "Come join us in death", "Hehou hahau"]
    }

    return (
      <Paper elevation = {0} className={classes.root}>
        <CardActionArea onClick={() => {
          console.log(`navigating to highlight article ${highlight.title}`)
          navigate("/news_article",false, {article: highlight})}}>
        <CardHeader
          className={classes.header}
          avatar={<Chip label="Highlight" color="primary" />}
          titleTypographyProps={{ variant: "h4" }}
          title= {highlight.title}
        />
        <CardMedia
          className={classes.media}
          image={highlight.imgUrl}
          title={highlight.imgTitle}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              {highlight.description}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <Typography>{highlight.timestamp}</Typography>
          <IconButton aria-label="Vote Up" className={classes.thumbsup}>
            <ThumbUpIcon style={{ color: green[500] }} />
          </IconButton>
          <IconButton aria-label="Vote down" className={classes.thumbsdown}>
            <ThumbDownIcon style={{ color: red[500] }} />
          </IconButton>
        </CardActions>
      </Paper>
    );
  };

  const AuthNews = () => {
    //eslint-disable-line
    if (isLoggedIn()) {
      return <NewsPage />;
    } else {
      return <AuthLoading />;
    }
  };
  return <AuthNews />;
};

const SingleLineGridList = () => {

  const classes = useStyles2();
  const tileData = [
    {
      title: "Halloween party",
      description: "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
      timestamp: "October 20, 2020",
      imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      imgTitle: "Halloween Party",
      paragraphs: ["This is the world we live in", "Come join us in death", "Hehou hahau"]
    
    },
    {
      title: "Forestroad ride",
      description: "Nice ride inside a forest! Come join us",
      timestamp: "October 25, 2020",
      imgUrl: require("../assets/pexels-johannes-plenio-1165982.jpg"),
      imgTitle:  "Forestroad ride",
      paragraphs: ["This is the world we live in", "Come join us in death", "Hehou hahau"]   
    },
    {
      title: "Dark forest",
      description: "Inside the dark forest we go! Time for some spooky ghosts to appear.",
      timestamp: "December 5, 2020",
      imgUrl: require("../assets/pexels-pixabay-289367.jpg"),
      imgTitle:  "Dark forest",
      paragraphs: ["This is the world we live in", "Come join us in death", "Hehou hahau"]    
    },
    {
      title: "Splendid Auroras",
      description: "Northern lights in their full glory. Come enjoy the spectacle with good company",
      timestamp: "December 26, 2020",
      imgUrl: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),
      imgTitle: "Splendid Auroras",
      paragraphs: ["This is the world we live in", "Come join us in death", "Hehou hahau"]   
    },
  ];

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.imgUrl}  onClick={() => {console.log(`navigating to article ${tile.title}`)
          navigate("/news_article",false, {article: tile})
          }}>
            <img src={tile.imgUrl} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default News;
