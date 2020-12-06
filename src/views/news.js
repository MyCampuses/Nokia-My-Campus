/* eslint-disable no-unused-vars */

import React from "react";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import {
  ThemeProvider,
  Typography,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import MuiThemes from "../styles/muiThemes";
import strings from "../localization";

// Importing items fragments
import HighlightItem from "../fragments/NewsHighlight";
import NewsBrowseGrid from "../fragments/NewsBrowseGrid";

// Importing hooks
import NewsHooks from "./../hooks/NewsHooks";
import { useEffect, useState } from "react";

/*eslint-enable */
const useStyles = makeStyles((theme) => ({
  header2: {
    marginTop: "10%",
    marginBottom: "5%",
  },
  main: {
    justifyContent: "center",
  },
}));

const News = () => {
  const { PageTheme } = MuiThemes();
  const { getHighlightItem, getNewsItems } = NewsHooks();
  const { isLoggedIn } = Authentication();
  const { TopNavigationBar } = NaviBar();
  const classes = useStyles();
  //const [rendered, setRendered] = useState(false);
  const [highlight, setHighlight] = useState({});
  const [tileData, setTileData] = useState(null);
  
  const updateHighlight = async () => {
    const highlightItem = await getHighlightItem()
    console.log(highlightItem)
    setHighlight(highlightItem);
  }

  const updateNews = async () => {
    const newsItems = await getNewsItems()
    console.log(newsItems)
    setTileData(newsItems)
  };
  
  // Getting data
  
  useEffect(() => {
    
    updateHighlight()
    updateNews()
      //setRendered(true)
      
    },[]
  )
  

  const NewsPage = () => {
    return (
      <ThemeProvider Theme={PageTheme} className={classes.main}>
        <CssBaseline />
        {TopNavigationBar()}
        <HighlightItem highlight={highlight} />
        <Typography
          variant="h5"
          color="textSecondary"
          component="h3"
          className={classes.header2}
        >
          {strings.browsenews}
        </Typography>
        {tileData && <NewsBrowseGrid tileData={tileData} />}
      </ThemeProvider>
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

export default News;
