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

const HighlightItem = (props) => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <CardActionArea
          onClick={() => {
            console.log(
              `navigating to highlight article ${props.highlight.title}`
            );
            navigate("/news_article", false, { article: props.highlight });
          }}
        >
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: "h4" }}
            title={props.highlight.title}
          />
          <CardMedia
            className={classes.media}
            image={props.highlight.bannerImgUrl}
            title={props.highlight.bannerImgTitle}
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
