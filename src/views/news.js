/* eslint-disable no-unused-vars */

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
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from "@material-ui/core/Chip";

// Testing grid list
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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
  const { isLoggedIn } = Authentication();
  const { TopNavigationBar } = NaviBar();
  const { infoStyle } = InfoStyles;
  const classes = useStyles();

  const NewsPage = () => {
    return (
      <div className={infoStyle}>
        {TopNavigationBar()}
        <h3>{strings.newspage}</h3>
        <HighlightItem />
        <h3>{"Selaa uutisia"}</h3>
        <SingleLineGridList />
      </div>
    );
  };

  const HighlightItem = () => {
    return (
      <Card className={classes.root}>
        <CardActionArea onClick={() => {console.log("Hello Darkness my old friend!")}}>
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
        </CardActionArea>
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
      img: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      title: "Halloween party",
      author: "author",
    },
    {
      img: require("../assets/pexels-johannes-plenio-1165982.jpg"),
      title: "Forestroad ride",
      author: "author2",
    },
    {
      img: require("../assets/pexels-pixabay-289367.jpg"),
      title: "Dark forest",
      author: "author3",
    },
    {
      img: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),
      title: "Splendid Auroras",
      author: "author4",
    },
  ];

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}  onClick={() => {console.log("Gridtile!")}}>
            <img src={tile.img} alt={tile.title} />
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
