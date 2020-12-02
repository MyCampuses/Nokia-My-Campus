import React from 'react';
import NewsBrowseGrid from "../fragments/NewsBrowseGrid";
import NewsHooks from '../hooks/NewsHooks';

const NewsBrowseWidget = () =>  {
    const { getNewsItems } = NewsHooks();
    const tileData = getNewsItems();
    
    return (
        <NewsBrowseGrid tileData={tileData} />
    );
};

export default NewsBrowseWidget;