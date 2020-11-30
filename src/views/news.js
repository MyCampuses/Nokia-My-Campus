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

// Importing items fragments
import HighlightItem from "../fragments/NewsHighlight";
import NewsBrowseGrid from "../fragments/NewsBrowseGrid";

// Importing hooks
import NewsHooks from './../hooks/NewsHooks';

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

  // Getting data
  const highlight = getHighlightItem();
  const tileData = getNewsItems();

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
          {"Selaa Uutisia"}
        </Typography>
        <NewsBrowseGrid tileData={tileData} />
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
