// News by Rockronnie
import React from "react";
import {
  makeStyles,
  Paper,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Chip,
} from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";
import { PropTypes } from "prop-types";
import { navigate } from "hookrouter";

import { useDispatch } from 'react-redux';
import { currentItem } from './../actions/NewsActions';

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
  cardactions: {
    justifyContent: "space-between",
  },
}));
// News highlight item, takes the curren highlight item as props, used in news
const HighlightItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // When navigating we're adding the item to redux/localstorage state so when user refreshes it doesn't lose the currently selected article and show an empty page
  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <CardActionArea
          onClick={() => {
            dispatch(currentItem(props.highlight));
            navigate("/news_article", false);
          }}
        >
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: "h5" }}
            title={props.highlight.title}
          />
         <CardMedia
            className={classes.media}
            image={props.highlight.headerImgUrl}
            title={props.highlight.headerImgTitle}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.highlight.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className={classes.cardactions}>
          <Typography>{props.highlight.timestamp}</Typography>
          <Chip label="Highlight" color="primary" />
        </CardActions>
      </Paper>
    </>
  );
};

HighlightItem.propTypes = {
  highlight: PropTypes.object,
};

export default HighlightItem;
