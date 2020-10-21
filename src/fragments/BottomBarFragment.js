/*
        This class holds all the bottom tabs for restaurant, p5 & p10.
        The page views are passed when clicked on the tab.
 */
import Tab from "@material-ui/core/Tab";
import strings from "../localization";
import Tabs from "@material-ui/core/Tabs";
import React, {useMemo, useState, Fragment} from "react";
import commonStyles from "../styles/commonStyles";
import TabFragments from "./TabFragments";
import P10MapView from "../views/p10MapView";
import P5MapView from "../views/p5MapView";
import RestaurantHeatMapView from "../views/restaurantHeatMap";
import Carousel from "react-material-ui-carousel";


const BottomBarTabFragment = (props) => {
    const commonClasses = commonStyles();
    const {TabFragmentHistory, TabFragmentLive, TabFragmentLiveP5, TabFragmentHistoryP5,
        TabRestaurantLines, TabRestaurantChart, TabRestaurantDonut, TabCarousel} = TabFragments();

    //P10 bottom tab
    const P10BottomTab = () => {
        const [value, setValue] = useState(0);
        const [date, setDate] = useState(new Date());

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        const handleDateChange = (data) => {
            setDate(data);
        };

        const tabHistory = useMemo(() =>
            <TabFragmentHistory value={value} index={1}
                                onDateChange={handleDateChange} date={date}>
            </TabFragmentHistory>, [value, date]
        );

        return (
            <div>
                <TabFragmentLive value={value} index={0}>
                </TabFragmentLive>
                {tabHistory}
                <P10MapView value={value} index={2}/>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    className={commonClasses.bottomTabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                >
                    <Tab id="live" label={strings.live}/>
                    <Tab id="history" label={strings.history}/>
                    <Tab id="p10map" label={strings.map}/>
                </Tabs>
            </div>
        );
    };

    //P5 bottom tab
    const P5BottomTab = () => {
        const [valueP5, setValueP5] = useState(0);
        const [date, setDate] = useState(new Date());

        const handleChange = (event, newValue) => {
            setValueP5(newValue);
        };

        const handleDateChange = (data) => {
            setDate(data);
        };

        const tabHistoryP5 = useMemo(() =>
            <TabFragmentHistoryP5 value={valueP5} index={1}
                                  onDateChange={handleDateChange} date={date}>
            </TabFragmentHistoryP5>, [valueP5, date]
        );

        const tabLiveP5 = useMemo(() =>
            <TabFragmentLiveP5 value={valueP5} index={0}>
            </TabFragmentLiveP5>, [valueP5]
        );

        return (
            <Fragment>
            <div>
                {tabLiveP5}
                {tabHistoryP5}
                <P5MapView value={valueP5} index={2}/>
                <Tabs
                    value={valueP5}
                    onChange={handleChange}
                    className={commonClasses.bottomTabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                >
                    <Tab id="live" label={strings.live}/>
                    <Tab id="history" label={strings.history}/>
                    <Tab id="p5map" label={strings.map}/>
                </Tabs>
            </div>
            </Fragment>
        );
    };

    //Restaurant bottom tab
    const RestaurantBottomTab = () => {
        const [valueRestaurant, setValueRestaurant] = useState(0);
        const [date, setDate] = useState(new Date());
        const handleDateChange = (data) => {
            setDate(data);
        };
//
        return (
            <div style={{paddingBottom:"50px"}}>
                <Fragment>
                    <Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
                <TabRestaurantLines value={valueRestaurant} index={0}/>
                <TabRestaurantChart value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                <RestaurantHeatMapView value={valueRestaurant} index={0}/>
                <TabRestaurantDonut value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                    </Carousel>
                </Fragment>
            </div>
        );
    };

    return {
        P10BottomTab: P10BottomTab,
        P5BottomTab: P5BottomTab,
        RestaurantBottomTab: RestaurantBottomTab,
    };
};

export default BottomBarTabFragment;
