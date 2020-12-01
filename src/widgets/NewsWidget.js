import React from 'react';
import NewsBrowseGrid from "../fragments/NewsBrowseGrid";
import NewsHooks from '../hooks/NewsHooks';

const NewsWidget = () =>  {
    const { getNewsItems } = NewsHooks();
    const tileData = getNewsItems();
    
    return (
        <NewsBrowseGrid tileData={tileData} />
    );
};

export default NewsWidget;