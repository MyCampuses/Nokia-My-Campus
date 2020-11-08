import React from "react";
import { makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { navigate } from 'hookrouter';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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

const NewsBrowseGrid = (props) => {

    const classes = useStyles();

  
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {props.tileData.map((tile) => (
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

  NewsBrowseGrid.propTypes = {
    tileData: PropTypes.array,
  };

  export default NewsBrowseGrid;