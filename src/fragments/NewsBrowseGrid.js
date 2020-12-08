// News by Rockronnie
import React from "react";
import { PropTypes } from 'prop-types';
import { navigate } from 'hookrouter';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { currentItem } from './../actions/NewsActions';
import newsBrowseGridStyle from '../styles/newsBrowseGridStyles';


// News browse grid. takes 10 most recent news as props used in view/news and as a widget
const NewsBrowseGrid = (props) => {

    const classes = newsBrowseGridStyle();
    const dispatch = useDispatch();
    // for every key in props we generate a tile that holds one of the objects. when we navigate we add the object to redux/localstorage state so if user refreshes the newsitem remains
    return (
      <div className={classes.root}>
        {props.tileData && <GridList className={classes.gridList} cols={2.5}>
          {Object.keys(props.tileData).map((tile) => (
            <GridListTile key={props.tileData[tile].id}  onClick={() => {console.log(`navigating to article ${props.tileData[tile].title}`)
            dispatch(currentItem(props.tileData[tile]));
            navigate("/news_article",false)
            }}>
              <img src={props.tileData[tile].headerImgUrl ? props.tileData[tile].headerImgUrl : require("../assets/default.jpg")} alt={props.tileData[tile].title} />
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