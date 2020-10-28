/* eslint-disable no-unused-vars */

import React from "react";
import "../styles/App.css";
import "../styles/p10Style.css";
import "date-fns";
import NaviBar from "../fragments/TopNavigationBarFragment";
import Authentication from "../hooks/Authentication";
import AuthLoading from "./authLoading";
import {Divider, ThemeProvider} from "@material-ui/core";
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
    margin: "2%",
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
  cardactions:{
    justifyContent: "space-between",
  },
  header2: {
    marginTop: "10%",
    marginBottom: "5%",
  },
  main: {
    justifyContent: "center",
  }
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "2%",
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
      <ThemeProvider Theme = {PageTheme} className = {classes.main}>
        <CssBaseline/>
        {TopNavigationBar()}
        <HighlightItem />
        <Typography variant="h5" color="textSecondary" component="h3" className = {classes.header2}>
              {"Selaa Uutisia"}
        </Typography>
        <SingleLineGridList />
      </ThemeProvider>
    );
  };

  const HighlightItem = () => {
    const highlight = {
      title: "Halloween party",
      higlight: true,
      description: "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
      timestamp: "October 20, 2020",
      imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      imgTitle: "Halloween Party",
      paragraphs: { 1: "This is the world we live in", 2:"Come join us in death", 3:"Hehou hahau",4:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`, 5:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`},
      paragraphImg: {2: require("../assets/pexels-wilson-vitorino-3230473.jpg"),5: require("../assets/pexels-wilson-vitorino-3230473.jpg"),}
    }

    return (
      <Paper elevation = {0} className={classes.root}>
        <CardActionArea onClick={() => {
          console.log(`navigating to highlight article ${highlight.title}`)
          navigate("/news_article",false, {article: highlight})}}>
        <CardHeader
          className={classes.header}
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
        <CardActions disableSpacing className = {classes.cardactions}>
          <Typography>{highlight.timestamp}</Typography>
          <Chip label="Highlight" color="primary" />
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
      highlight: true,
      description: "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
      timestamp: "October 20, 2020",
      imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      imgTitle: "Halloween Party",
      paragraphs: { 1: "This is the world we live in", 2:"Come join us in death", 3:"Hehou hahau",4:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`, 5:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`},
      paragraphImg: {2: require("../assets/pexels-wilson-vitorino-3230473.jpg"),5: require("../assets/pexels-wilson-vitorino-3230473.jpg"),}
    
    },
    {
      title: "Forestroad ride",
      description: "Nice ride inside a forest! Come join us",
      highlight: false,
      timestamp: "October 25, 2020",
      imgUrl: require("../assets/pexels-johannes-plenio-1165982.jpg"),
      imgTitle:  "Forestroad ride",
      paragraphs: { 1: "Superdupernice this is this ride man!", 2:"Nice road man! Tsagabagabouhou", 3:"Hehou hahau",4:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`, 5:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`},
      paragraphImg: {3: require("../assets/pexels-johannes-plenio-1165982.jpg"),5: require("../assets/pexels-johannes-plenio-1165982.jpg"),}
    
    },
    {
      title: "Dark forest",
      description: "Inside the dark forest we go! Time for some spooky ghosts to appear.",
      highlight: false,
      timestamp: "December 5, 2020",
      imgUrl: require("../assets/pexels-pixabay-289367.jpg"),
      imgTitle:  "Dark forest",
      paragraphs: { 1: "Spooky forest man. Ghost in here yes.", 2:"Very dark. Very very dark", 3:"Hehou hahau",4:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`, 5:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`},
      paragraphImg: {3: require("../assets/pexels-pixabay-289367.jpg"),5: require("../assets/pexels-pixabay-289367.jpg"),}
    
    },
    {
      title: "Splendid Auroras",
      description: "Northern lights in their full glory. Come enjoy the spectacle with good company",
      highlight: false,
      timestamp: "December 26, 2020",
      imgUrl: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),
      imgTitle: "Splendid Auroras",
      paragraphs: { 1: "Amazink (British accent)", 2:"Never seen anything like et(Brittish accent)", 3:"Hehou hahau",4:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`, 5:`Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`},
      paragraphImg: {4: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),5: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),}
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
