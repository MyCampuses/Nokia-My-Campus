import React from "react";
import { PropTypes } from 'prop-types';
import { navigate } from 'hookrouter';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { currentItem } from '../actions/NewsActions';
import newsBrowseGridStyles from '../styles/newsBrowseGridStyles';

const NewsBrowseGrid = (props) => {

    const classes = newsBrowseGridStyles();
    const dispatch = useDispatch();
    
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {props.tileData.map((tile) => (
            <GridListTile key={tile.bannerImgUrl}  onClick={() => {console.log(`navigating to article ${tile.title}`)
            dispatch(currentItem(tile));
            navigate("/news_article",false)
            }}>
              <img src={tile.bannerImgUrl} alt={tile.title} />
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