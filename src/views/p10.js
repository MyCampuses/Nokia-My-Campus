import React from "react";

import p10Styles from '../styles/p10Styles'
import commonStyles from "../styles/commonStyles";
import '../styles/App.css';
import '../styles/p10Style.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const P10 = () => {
    const p10classes = p10Styles();
    const commonClasses = commonStyles();
    const [value, setValue] = React.useState(0);
    const [liveState, setLiveState] = React.useState(true);
    const selectedLive = liveState ? commonClasses.bottomTab : commonClasses.bottomTabSelected;
    const [historyState, setHistoryState] = React.useState(true);
    const selectedHistory = historyState ? commonClasses.bottomTabSelected : commonClasses.bottomTab;

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setLiveState(!liveState);
        setHistoryState(!historyState);
    };

    return (
        <Container component="main" maxWidth="lg" id="mainContainer">
            <div className="p10">
                <Typography className={p10classes.p10title} component="h1" variant="h5">P10</Typography>
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
                className={commonClasses.bottomTabs}
                variant="fullWidth"
                indicatorColor="#008AFF"
                >
                <Tab id="live" className={`${selectedLive}`} label="Live" />
                <Tab id="history" className={`${selectedHistory}`} label="History"/>
            </Tabs>
        </Container>
    );
};

export default P10