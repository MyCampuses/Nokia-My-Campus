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
  const { isLoggedIn } = Authentication();
  const { TopNavigationBar } = NaviBar();
  const classes = useStyles();

  const highlight = {
    title: "Halloween party",
    higlight: true,
    description:
      "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
    timestamp: "October 20, 2020",
    imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
    imgTitle: "Halloween Party",
    paragraphs: {
      1: "This is the world we live in",
      2: "Come join us in death",
      3: "Hehou hahau",
      4: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

    Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
    
    Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
      5: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

    Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
    
    Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
    },
    paragraphImg: {
      2: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      5: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
    },
  };

  const tileData = [
    {
      title: "Halloween party",
      highlight: true,
      description:
        "Nokia halloween party this saturday at dream cafe! Come join us for some eerie fun",
      timestamp: "October 20, 2020",
      imgUrl: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      imgTitle: "Halloween Party",
      paragraphs: {
        1: "This is the world we live in",
        2: "Come join us in death",
        3: "Hehou hahau",
        4: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
        5: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
      },
      paragraphImg: {
        2: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
        5: require("../assets/pexels-wilson-vitorino-3230473.jpg"),
      },
    },
    {
      title: "Forestroad ride",
      description: "Nice ride inside a forest! Come join us",
      highlight: false,
      timestamp: "October 25, 2020",
      imgUrl: require("../assets/pexels-johannes-plenio-1165982.jpg"),
      imgTitle: "Forestroad ride",
      paragraphs: {
        1: "Superdupernice this is this ride man!",
        2: "Nice road man! Tsagabagabouhou",
        3: "Hehou hahau",
        4: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
        5: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
      },
      paragraphImg: {
        3: require("../assets/pexels-johannes-plenio-1165982.jpg"),
        5: require("../assets/pexels-johannes-plenio-1165982.jpg"),
      },
    },
    {
      title: "Dark forest",
      description:
        "Inside the dark forest we go! Time for some spooky ghosts to appear.",
      highlight: false,
      timestamp: "December 5, 2020",
      imgUrl: require("../assets/pexels-pixabay-289367.jpg"),
      imgTitle: "Dark forest",
      paragraphs: {
        1: "Spooky forest man. Ghost in here yes.",
        2: "Very dark. Very very dark",
        3: "Hehou hahau",
        4: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
        5: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
      },
      paragraphImg: {
        3: require("../assets/pexels-pixabay-289367.jpg"),
        5: require("../assets/pexels-pixabay-289367.jpg"),
      },
    },
    {
      title: "Splendid Auroras",
      description:
        "Northern lights in their full glory. Come enjoy the spectacle with good company",
      highlight: false,
      timestamp: "December 26, 2020",
      imgUrl: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),
      imgTitle: "Splendid Auroras",
      paragraphs: {
        1: "Amazink (British accent)",
        2: "Never seen anything like et(Brittish accent)",
        3: "Hehou hahau",
        4: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
        5: `Lorem ipsum dolor sit amet, meis expetenda ei eam, has ne assum aeque adipiscing, no legere utroque qui. Vix et congue invidunt facilisi, audire sententiae ea sea. Nulla accusam elaboraret eos ne. Solet putant epicuri te duo, per no error vivendum contentiones, legere mnesarchum duo ne. At qui sint dignissim, eum oratio veniam an.

      Probo ancillae vituperatoribus in mea, his an dico enim bonorum, illum gubergren posidonium ex quo. Sit ea case minimum, mei malorum accusam expetendis ex. Ei has exerci nemore convenire, duo id eirmod nonumes. Eos et animal dolorum epicurei, te eam altera mediocrem, eu sea torquatos reformidans.
      
      Elitr iudicabit eloquentiam cu vim. Graecis mediocritatem his in, ne erant harum soleat cum. In natum propriae mel. Quod impetus.`,
      },
      paragraphImg: {
        4: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),
        5: require("../assets/pexels-tobias-bjørkli-1693095.jpg"),
      },
    },
  ];

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
