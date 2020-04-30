/*
        This class holds all the bottom tabs for restaurant, p5 & p10.
        The page views are passed when clicked on the tab.
 */
import Tab from "@material-ui/core/Tab";
import strings from "../localization";
import Tabs from "@material-ui/core/Tabs";
import React, {useMemo, useState} from "react";
import commonStyles from "../styles/commonStyles";
import TabFragments from "./TabFragments";
import P10MapView from "../views/p10MapView";
import P5MapView from "../views/p5MapView";

const BottomBarTabFragment = (props) => {
    const commonClasses = commonStyles();
    const {TabFragmentHistory, TabFragmentLive, TabFragmentLiveP5, TabFragmentHistoryP5, TabRestaurantLines, TabRestaurantChart} = TabFragments();

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
        );
    };

    //Restaurant bottom tab
    const RestaurantBottomTab = () => {
        const [valueRestaurant, setValueRestaurant] = useState(0);
        const [date, setDate] = useState(new Date());

        const handleChange = (event, newValue) => {
            setValueRestaurant(newValue);
        };

        const handleDateChange = (data) => {
            setDate(data);
        };

        return (
            <div style={{paddingBottom:"50px"}}>
                <TabRestaurantLines value={valueRestaurant} index={0}/>
                <TabRestaurantChart value={valueRestaurant} index={1} onDateChange={handleDateChange} date={date}/>
                <Tabs
                    value={valueRestaurant}
                    onChange={handleChange}
                    className={commonClasses.bottomTabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                >
                    <Tab id="lines" label={strings.lines}/>
                    <Tab id="graph" label={strings.live+ " "+strings.graph}/>
                </Tabs>
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
