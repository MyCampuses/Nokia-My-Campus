import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { blue, green, red } from "@material-ui/core/colors";
import Chip from "@material-ui/core/Chip";
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      marginTop: 10,
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
    typography:{
      textAlign: "left",
      margin: 10,
    },
    cardactions: {
      justifyContent: "space-between"
    },
  }));


const NewsItem = (props) => {
    const classes = useStyles();
    var data = props;
    console.log(data)
    // ADD NULL CHECK OR ALTERNATIVE COMPONENT FOR RENDER, FOR CARDCONTENT.
    return (
    <>
      <ThemeProvider> 
      <Paper elevation = {0} className={classes.root}>
        <CardActions disableSpacing className = {classes.cardactions}>
          <Typography>{data.articleData.timestamp}</Typography>
          {data.articleData.highlight !== false ? <Chip label="Highlight" color="primary" /> : <div/>}
        </CardActions>
        <CardMedia
          className={classes.media}
          image={data.articleData.bannerImgUrl}
          title={data.articleData.bannerImgTitle}
        />
        <CardHeader
          className={classes.header}
          titleTypographyProps={{ variant: "h5" }}
          title={data.articleData.title}
        />
        <CardContent>
          {(Object.keys(data.articleData.paragraphs) || {}).map(paragraph => (
            <>
            {data.articleData.paragraphs[paragraph].imgUrl &&
            <CardMedia
                className={classes.media}
                image={data.articleData.paragraphs[paragraph].imgUrl}
            />}
            {data.articleData.paragraphs[paragraph].imgTitle &&
            <Typography className = {classes.typography} key={paragraph} variant="body2" color="textSecondary" component="p">{data.articleData.paragraphs[paragraph].imgTitle}</Typography>}
            <Typography className = {classes.typography} key={paragraph} variant="body2" color="textSecondary" component="p">{data.articleData.paragraphs[paragraph].text}</Typography>
            </>
          ))}
        </CardContent>
      </Paper>
      </ThemeProvider>
    </>
    );
  };

  NewsItem.propTypes = {
    articleData: PropTypes.object
  };

  export default NewsItem;