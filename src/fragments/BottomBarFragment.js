import Tab from "@material-ui/core/Tab";
import strings from "../localization";
import Tabs from "@material-ui/core/Tabs";
import React, {useMemo, useState} from "react";
import commonStyles from "../styles/commonStyles";
import TabFragments from "./TabFragments";
import P10MapView from "../views/p10MapView";

const BottomBarTabFragment = (props) => {

    const P10BottomTab = (props) => {

        const commonClasses = commonStyles();
        const [value, setValue] = useState(0);
        const [date, setDate] = useState(new Date());
        const {TabFragmentHistory, TabFragmentLive} = TabFragments();

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        const handleDateChange = (data) => {
            setDate(data);
            console.log(data);
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

    return {
        P10BottomTab: P10BottomTab,
    };
};

export default BottomBarTabFragment;