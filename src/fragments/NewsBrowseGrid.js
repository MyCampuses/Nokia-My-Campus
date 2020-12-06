import React from "react";
import { makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { navigate } from 'hookrouter';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { currentItem } from './../actions/NewsActions';


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
      color: theme.palette.primary.white,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
   
  }));

const NewsBrowseGrid = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    console.log(props.tileData)
    return (
      <div className={classes.root}>
        {props.tileData && <GridList className={classes.gridList} cols={2.5}>
          {Object.keys(props.tileData).map((tile) => (
            <GridListTile key={props.tileData[tile]}  onClick={() => {console.log(`navigating to article ${props.tileData[tile].title}`)
            dispatch(currentItem(props.tileData[tile]));
            navigate("/news_article",false)
            }}>
              <img src={props.tileData[tile].headerImgUrl} alt={props.tileData[tile].title} />
              <GridListTileBar
                title={props.tileData[tile].title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>}
      </div>
    );
  };

  NewsBrowseGrid.propTypes = {
    tileData: PropTypes.object,
  };

  export default NewsBrowseGrid;